# electron-preact-app :atom_symbol: :arrow_right: :rocket:
[![GitHub issues](https://img.shields.io/github/issues/btzr-io/electron-preact-app.svg?style=for-the-badge)](https://github.com/btzr-io/electron-preact-app/issues)
[![GitHub forks](https://img.shields.io/github/forks/btzr-io/electron-preact-app.svg?style=for-the-badge)](https://github.com/btzr-io/electron-preact-app/network)
[![GitHub license](https://img.shields.io/github/license/btzr-io/electron-preact-app.svg?style=for-the-badge)](https://github.com/btzr-io/electron-preact-app/blob/master/LICENSE)

Create electron apps with no build configuration 

### Installation

```Shell
yarn global add electron-preact-app
```
```Shell
npm -g electron-preact-app
```

### Usage
Creating a new project:
```Shell
$ electron-preact-app create <app-name> 
```
Addign github [common-files](https://github.com/kmindi/special-files-in-repository-root):
```Shell
$ electron-preact-app create <app-name> --github
```

### What's inside the bundle?

* electron, electron-webpack, electron-build.
* webpack, preact, redux, css-modules.
