# InstallPrompt

This is a small library for handling install Banner for Progreww Web Application(PWA).

# Dependency

No dependency

# Install

```
yarn add installPrompt
```

# Usage
```
import InstallPrompt from 'installPrompt';
// initial installPrompt
const installPrompt = new InstallPrompt();

// add 1 count when user do some interactive
installPrompt.addCount();

// check if prompt should popup
installPrompt.checkPrompt();
```

# Real example (React)

```
  import InstallPrompt from 'installPrompt';
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

* promptKey: (string) default is '~installPrompt~'

* minimumPrompt: (number) default is 2



e.g,
```
const installPrompt = new InstallPrompt({
  promptKey: 'custom-localstorage-key',
  minumumPrompt: 5
});
```

# Development
```
yarn dev
```

# Test
```
yarn test
```




