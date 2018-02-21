class installPromptBanner {
  /**
   * Creates an instance of installPromptBanner.
   * @param {object} { promptKey = '~installPromptBanner~', minimumPrompt = 2 }={}
   * @memberof installPromptBanner
   */
  constructor({ promptKey = '~installPromptBanner~', minimumPrompt = 2 } = {}) {
    this.inited = false;
    this.deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', this._handleBeforeInstallPrompt, false);
    window.addEventListener('beforeunload', this._handleBeforeUnload, false);
    this.options = {
      promptKey,
      minimumPrompt,
    };
    this.count = this._getCountFromStorage();

    return this;
  }

  _handleBeforeInstallPrompt = e => {
    try {
      localStorage.setItem(this.options.promptKey, this.count);
    } catch (e) {
      // do nothing
    }
  }

  _handleBeforeInstallPrompt = e => {
    const count = this._getCountFromStorage();

    if (count <= this.options.minimumPrompt) {
      e.preventDefault();
      this.deferredPrompt = e;

      return false;
    }

    return true;
  };

  _getCountFromStorage = () => {
    let currentPVCount = 0;

    try {
      currentPVCount = localStorage.getItem(this.options.promptKey);
    } catch (e) {
      // do nothing
    }

    return +currentPVCount;
  };

  _setCountToStorage = () => {
    try {
      localStorage.setItem(this.options.promptKey, this.count);
    } catch (e) {
      // do nothing
    }

    return this.count;
  };

  checkPrompt = (force = false) => {
    if (force || this.count > this.options.minimumPrompt) {
      this.pop();
    }

    return this;
  };

  pop = () => {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
    }

    return this;
  };

  /**
   * addCount from localStorage
   * @memberof installPromptBanner
   */
  addCount = () => {
    this.count++;

    return this;
  };
}

export default installPromptBanner;
