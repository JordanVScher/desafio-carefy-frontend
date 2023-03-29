# Desafio Carefy Frontend

## Fill in env configuration

- REACT_APP_ENV='dev'
- REACT_APP_BACKEND_URL='http://localhost:3500'
- REACT_APP_GITHUB_OAUTH_CLIENT_ID=<GET_THIS_FROM_YOUR_GITHUB_OAUTH_APP>

## How this works

User need to login to their Gituhb account via OAuth2 before it can access the Patient screen.
Once logged in, the user can view, add, edit and delete patients.
Each patient endpoint is protect by the user's github access_token.

## Available Scripts

In the project directory, you can run:

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run 
```

## Building the app

```bash
# unit tests
$ npm run build
```

## Commiting

Before commiting, project was configured with Husky to:
- run tests for changed files 
- and check if commit message follow the "Conventional Commits" guideline
