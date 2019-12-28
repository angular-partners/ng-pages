## Installation

```bash
$ npm install
```

You need a personal [access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) which is provide via the environment variable `GH_TOKEN`.
We'll think of something better here in the future.

## Running the app

```bash
# development
$ GH_TOKEN=XXX npm run start

# watch mode
$ GH_TOKEN=XXX npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
