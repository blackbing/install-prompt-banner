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
    this.options = {
      promptKey,
      minimumPrompt,
    };

    return this;
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

  checkPrompt = (force = false) => {
    const count = this._getCountFromStorage();

    if (force || count > this.options.minimumPrompt) {
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
    let currentPVCount = this._getCountFromStorage();

    currentPVCount += 1;
    try {
      localStorage.setItem(this.options.promptKey, currentPVCount);
    } catch (e) {
      // do nothing
    }

    return this;
  };
}

export default installPromptBanner;
