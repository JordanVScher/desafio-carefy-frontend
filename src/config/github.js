import { GITHUB_OAUTH_CLIENT_ID } from './env';

export const AuthUrl = `http://github.com/login/oauth/authorize?client_id=${GITHUB_OAUTH_CLIENT_ID}`;
export const ClientId = GITHUB_OAUTH_CLIENT_ID;
