/* eslint-disable import/first,func-names,global-require,prefer-arrow-callback */

import InstallPrompt from '../index';

describe('installPrompt', () => {
  let installPrompt;

  beforeEach(() => {
    global.localStorage.getItem = jest.fn(() => 0);
    installPrompt = new InstallPrompt();
  });

  it('should addCount', () => {
    installPrompt = new InstallPrompt({ promptKey: 'test' });
    expect(installPrompt.addCount()).toEqual(installPrompt);
    expect(global.localStorage.setItem).toBeCalledWith('test', 1);
  });

  it('should getCountFromStorage', () => {
    expect(installPrompt._getCountFromStorage()).toEqual(0);
  });

  it('should test promptCheck', () => {
    expect(installPrompt.checkPrompt()).toEqual(installPrompt);
  });

  it('should getCountFromStorage', () => {
    global.localStorage.getItem = jest.fn(() => 3);
    expect(installPrompt._getCountFromStorage()).toEqual(3);
  });
});
