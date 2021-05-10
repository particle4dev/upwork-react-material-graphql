# react-material-graphql

## Quickstart

### Prerequisites

Following are the minimum tested versions for the tools and libraries you need for running test App:

- Nodejs: v12.17.0 or newer

- Yarn: v1.22.5 or newer

- Npm: v6.14.6 or newer

### Install

First, clone the repo via git:

Setup yarn workspace and install dependencies with yarn.

```bash
$ cd service-test-www
$ yarn config set workspaces-experimental true
$ yarn policies set-version 1.18.0
$ yarn install
```

To start the webapp in local, please run:

```bash
$ tools/run-apps.sh service-test-www
```

To stop the webapp:

```bash
$ tools/stop-apps.sh
```

Open `my.log` file to view the log.

## Running eslint

```bash
npx nx lint service-test-www --fix
```

## Running unit tests

```bash
npx nx test service-test-www

# generate code coverage
npx nx run service-test-www:test --code-coverage
```

## Build service

```bash
npx nx build service-test-www # to build the application
```

For more infomation, please visit: https://nx.dev/latest/react/getting-started/intro
