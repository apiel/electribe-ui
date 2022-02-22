enum githubStorageKeys {
    githubUser = 'githubUser',
    githubToken = 'githubToken',
    githubRepo = 'githubRepo',
}

function store(key: string, value: string) {
    window.localStorage.setItem(key, value);
}

function get(key: string) {
    return window.localStorage.getItem(key);
}

export function getGithubUser() {
    return get(githubStorageKeys.githubUser) || '';
}

export function getGithubRepo() {
    return get(githubStorageKeys.githubRepo) || '';
}

export function getGithubToken() {
    return get(githubStorageKeys.githubToken) || '';
}

export function storeGithubUser(val: string) {
    store(githubStorageKeys.githubUser, val);
}

export function storeGithubRepo(val: string) {
    store(githubStorageKeys.githubRepo, val);
}

export function storeGithubToken(val: string) {
    store(githubStorageKeys.githubToken, val);
}
