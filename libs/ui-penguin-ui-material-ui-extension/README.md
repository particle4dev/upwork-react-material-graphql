# ui-penguin-ui-material-ui-extension

This library was generated with [Nx](https://nx.dev).

## Setup ui-penguin-ui-material-ui-extension library

$ npx nx g lib ui-penguin-ui-material-ui-extension --publishable --importPath @penguin-ui/material-ui-extension
? Which stylesheet format would you like to use? None

$ npx nx lint ui-penguin-ui-material-ui-extension --fix
$ npx nx build ui-penguin-ui-material-ui-extension # to build the lib
$ npx nx test ui-penguin-ui-material-ui-extension # to test the lib
$ npx nx run ui-penguin-ui-material-ui-extension:storybook

## Add packages

$ yarn workspace @penguin-ui/material-ui-extension add css-mediaquery

## Note
1. If you want to remove this app:

$ npx nx g @nrwl/workspace:rm ui-penguin-ui-material-ui-extension

2. 
$ npx nx lint ui-penguin-ui-material-ui-extension --fix && npx nx test ui-penguin-ui-material-ui-extension && npx nx build ui-penguin-ui-material-ui-extension 
