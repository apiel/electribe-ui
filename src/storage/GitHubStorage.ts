// might want to use import { Octokit } from '@octokit/core';

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

    async read(path: string) {
        const { content } = await this.getContents(path);
        return Buffer.from(content, 'base64');
    }

    async saveFile(file: string, content: string | number[]) {
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
