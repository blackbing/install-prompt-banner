# install-prompt-banner [![npm version](https://badge.fury.io/js/install-prompt-banner.svg)](https://badge.fury.io/js/install-prompt-banner) [![npm](https://img.shields.io/npm/dt/install-prompt-banner.svg?style=flat-square)](https://www.npmjs.com/package/install-prompt-banner) [![Build Status](https://api.travis-ci.org/blackbing/install-prompt-banner.svg?branch=master)](https://travis-ci.org/blackbing/install-prompt-banner) [![codecov](https://codecov.io/gh/blackbing/install-prompt-banner/branch/master/graph/badge.svg)](https://codecov.io/gh/blackbing/install-prompt-banner)

This is a small library for handling install Banner for Progressive Web Apps(PWA).

# Why

When developing Progressive Web Apps(PWA), the timing of Install App Banner is confused. The default prompt behavior is not cool for users. I create a simple count way to decide the timing of the install banner. This library is very tiny which is implemention from *Deferring or cancelling the prompt* <https://developers.google.com/web/fundamentals/app-install-banners/>. You can add it with whatever user's interaction in your web site.

For example,

* click "Call to Action" 3 times
* check latest more than 3 times
* viewed more than 2 pages.

# Dependency

No dependency

# Install

``` sh
yarn add install-prompt-banner
```

# Usage

``` js
import InstallPrompt from 'install-prompt-banner';
// initial installPromptBanner
const installPromptBanner = new InstallPrompt();

// add 1 count when user do some interactive
installPromptBanner.addCount();

// check if prompt should popup
installPromptBanner.checkPrompt();
```

# Real example (React)

``` js
  import InstallPrompt from 'install-prompt-banner';
  ...
  componentDidMount() {
    this.installPromptBanner = new InstallPrompt();
    this.installPromptBanner.addCount();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cid !== this.props.cid) {
      this.installPromptBanner.addCount().checkPrompt();
    }
  }

```

# Options

* promptKey: (string) default is 'installPromptBanner'

* minimumPrompt: (number) default is 2



e.g,

``` js
const installPromptBanner = new InstallPrompt({
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




