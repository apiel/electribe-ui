import { Octokit } from '@octokit/core';
import { elById, evStrVal, inputById } from './dom';
import { gitHubStorage, GitHubStorage } from './storage/GitHubStorage';
import {
    getGithubRepo,
    getGithubToken,
    getGithubUser,
    storeGithubRepo,
    storeGithubToken,
    storeGithubUser,
} from './storage/localStorage';

elById('githubUser').onchange = evStrVal(storeGithubUser);
inputById('githubUser').value = getGithubUser();

elById('githubRepo').onchange = evStrVal(storeGithubRepo);
inputById('githubRepo').value = getGithubRepo();

elById('githubToken').onchange = evStrVal(storeGithubToken);
inputById('githubToken').value = getGithubToken();

gitHubStorage.info().then((info) => (elById('githubInfo').innerText = info));

export async function loadSequences() {
    // const dir = await gitHubStorage.readdir('samples');
    // console.log({ dir });

    // const octokit = new Octokit({ auth: getGithubToken() });

    // const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    //     owner: 'apiel',
    //     repo: 'zic',
    //     // path: 'path'
    //   })
    // console.log(response);
}

loadSequences();
