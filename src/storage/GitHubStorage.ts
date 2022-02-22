// we should try to get rid of node specific import
// and then npm uninstall @types/node

import { basename, dirname } from 'path';

import { getGithubRepo, getGithubToken, getGithubUser } from './localStorage';

const BASE_URL = 'https://api.github.com';
const COMMIT_PREFIX = '[GitZic]';

export enum ERR {
    missingGitHubConfig = 'Please authenticate to use GitHub api',
}

export class GitHubStorage {
    async readdir(path: string) {
        try {
            const data = await this.getContents(path);
            return data.map(({ name }: any) => name) as string[]; // type is also available so we could filter for type === 'file'
        } catch (error) {
            if (error?.response?.status === 404) {
                return [] as string[];
            }
            throw error;
        }
    }

    async image(path: string) {
        const data = await this.getContents(path);
        if (data.content) {
            return Buffer.from(data.content, 'base64');
        }
        return data.download_url;
    }

    async blob(path: string) {
        const data = await this.getContents(dirname(path)); // we might need to increase limit
        const filename = basename(path);
        const filedata = data.find((item: any) => item.name === filename);
        if (!filedata) {
            return;
        }
        const {
            data: { content },
        } = await this.fetch(`${this.blobUrl}/${filedata.sha}`);
        return Buffer.from(content, 'base64');
    }

    async saveBlob(file: string, content: Buffer) {
        await this.remove(file);
        const [
            {
                sha: latestCommitSha,
                commit: {
                    tree: { sha: base_tree },
                },
            },
        ] = await this.fetch(`${this.baseRepo}/commits`);

        const { sha: newBlobSha } = await this.fetch(this.blobUrl, {
            method: 'POST',
            body: JSON.stringify({
                content: content.toString('base64'),
                encoding: 'base64',
            }),
        });

        const { sha: newTreeSha } = await this.fetch(
            `${this.baseRepo}/git/trees`,
            {
                method: 'POST',
                body: JSON.stringify({
                    base_tree,
                    tree: [
                        {
                            path: file,
                            mode: '100644',
                            sha: newBlobSha,
                        },
                    ],
                }),
            },
        );

        const { sha: shaCommit } = await this.fetch(
            `${this.baseRepo}/git/commits`,
            {
                method: 'POST',
                body: JSON.stringify({
                    message: `${COMMIT_PREFIX} save blob`,
                    tree: newTreeSha,
                    parents: [latestCommitSha],
                }),
            },
        );

        await this.fetch(`${this.baseRepo}/git/refs/heads/master`, {
            method: 'PATCH',
            body: JSON.stringify({ sha: shaCommit }),
        });
        // console.log('Blob saved', file);
    }

    async read(path: string) {
        const { content } = await this.getContents(path);
        return Buffer.from(content, 'base64');
    }

    async readJSON(path: string) {
        try {
            return JSON.parse((await this.read(path)).toString());
        } catch (error) {
            return undefined;
        }
    }

    async remove(file: string) {
        const { sha } = await this.getContents(file);
        const body = JSON.stringify({
            message: `${COMMIT_PREFIX} delete file`,
            sha,
        });
        return this.fetch(`${this.contentsUrl}/${file}`, {
            method: 'DELETE',
            body,
        });
    }

    async saveFile(file: string, content: string) {
        if (!this.repo) {
            throw new Error('GitHub repository required.');
        }
        const sha = await this.getSha(file);
        const body = JSON.stringify({
            message: `${COMMIT_PREFIX} save file`,
            content: Buffer.from(content).toString('base64'),
            ...(sha && { sha }),
        });
        return this.fetch(`${this.contentsUrl}/${file}`, {
            method: 'PUT',
            body,
        });
    }

    protected async getSha(file: string) {
        try {
            const { sha } = await this.getContents(file);
            return sha;
        } catch (error) {
            if (error?.response?.status !== 404) {
                throw error;
            }
        }
    }

    saveJSON(file: string, content: any) {
        return this.saveFile(file, JSON.stringify(content, null, 4));
    }

    async copy(src: string, dst: string) {
        const srcData = await this.read(src);
        if (srcData) {
            this.saveFile(dst, srcData.toString());
        }
    }

    async copyBlob(src: string, dst: string) {
        const srcData = await this.blob(src);
        if (srcData) {
            await this.saveBlob(dst, srcData);
        }
    }

    async repos() {
        const data = await this.fetch(
            `${BASE_URL}/users/${this.user}/repos?sort=updated&per_page=1000`,
        );
        return data.map(({ name }: any) => name) as string[];
    }

    async getRepo() {
        return this.repo;
    }

    async info() {
        const {
            rate: { limit, remaining },
        } = await this.fetch(`${BASE_URL}/rate_limit`);
        return `For GitHub API requests, you can make up to 5000 requests per hour.
        Your current rate limit is: ${remaining} of ${limit}`;
    }

    protected async fetch(url: string, config?: RequestInit) {
        if (!this.token || !this.user) {
            throw new Error(ERR.missingGitHubConfig);
        }
        const res = await fetch(url, {
            ...config,
            headers: {
                ...config?.headers,
                Authorization: `token ${this.token}`,
            },
        });

        return res.json();
    }

    protected getContents(path: string) {
        return this.fetch(`${this.contentsUrl}/${path}`);
    }

    protected get baseRepo() {
        return `${BASE_URL}/repos/${this.user}/${this.repo}`;
    }

    protected get contentsUrl() {
        return `${this.baseRepo}/contents`;
    }

    protected get blobUrl() {
        return `${this.baseRepo}/git/blobs`;
    }

    protected get user() {
        return getGithubUser();
    }

    protected get token() {
        return getGithubToken();
    }

    protected get repo() {
        return getGithubRepo();
    }
}

export const gitHubStorage = new GitHubStorage();
