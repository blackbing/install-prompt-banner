/* eslint-disable import/first,func-names,global-require,prefer-arrow-callback */

import InstallPromptBanner from '../index';

describe('installPromptBanner', () => {
  let installPromptBanner;

  beforeEach(() => {
    global.localStorage.getItem = jest.fn(() => 0);
    installPromptBanner = new InstallPromptBanner();
  });

  it('should addCount', () => {
    installPromptBanner = new InstallPromptBanner({ promptKey: 'test' });
    expect(installPromptBanner.addCount()).toEqual(installPromptBanner);
    expect(global.localStorage.setItem).toBeCalledWith('test', 1);
  });

  it('should getCountFromStorage', () => {
    expect(installPromptBanner._getCountFromStorage()).toEqual(0);
  });

  it('should test promptCheck', () => {
    expect(installPromptBanner.checkPrompt()).toEqual(installPromptBanner);
  });

  it('should getCountFromStorage', () => {
    global.localStorage.getItem = jest.fn(() => 3);
    expect(installPromptBanner._getCountFromStorage()).toEqual(3);
  });
});
