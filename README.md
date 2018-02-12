# install-prompt [![npm version](https://badge.fury.io/js/install-prompt.svg)](https://badge.fury.io/js/install-prompt) [![Build Status](https://api.travis-ci.org/blackbing/install-prompt.svg?branch=master)](https://travis-ci.org/blackbing/install-prompt) [![codecov](https://codecov.io/gh/blackbing/install-prompt/branch/master/graph/badge.svg)](https://codecov.io/gh/blackbing/install-prompt)

This is a small library for handling install Banner for Progreww Web Application(PWA).

# Dependency

No dependency

# Install

``` sh
yarn add install-prompt
```

# Usage

``` js
import InstallPrompt from 'install-prompt';
// initial installPrompt
const installPrompt = new InstallPrompt();

// add 1 count when user do some interactive
installPrompt.addCount();

// check if prompt should popup
installPrompt.checkPrompt();
```

# Real example (React)

``` js
  import InstallPrompt from 'install-prompt';
  ...
  componentDidMount() {
    this.installPrompt = new InstallPrompt();
    this.installPrompt.addCount();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cid !== this.props.cid) {
      this.installPrompt.addCount().checkPrompt();
    }
  }

```

# Options

* promptKey: (string) default is 'installPrompt'

* minimumPrompt: (number) default is 2



e.g,

``` js
const installPrompt = new InstallPrompt({
  promptKey: 'custom-localstorage-key',
  minumumPrompt: 5
});
```

# Development

``` sh
yarn dev
```

# Test

``` sh
yarn test
```




