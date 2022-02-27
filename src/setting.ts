import { elById, evStrVal, inputById } from './dom';
import { gitHubStorage } from './storage/GitHubStorage';
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
