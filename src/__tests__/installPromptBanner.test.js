/* eslint-disable import/first,func-names,global-require,prefer-arrow-callback */

import InstallPromptBanner from '../index';

const defaultPromptKey = '~installPromptBanner~';

describe('installPromptBanner', function spec() {
  beforeEach(() => {
    localStorage.clear();
    this.makeSubject = (options) => {
      return new InstallPromptBanner(options);
    };
  });

  it('addCount should return Instance', () => {
    const subject = this.makeSubject();

    expect(subject.addCount()).toEqual(subject);
  });

  it('checkPrompt should return Instance', () => {
    const subject = this.makeSubject();

    expect(subject.checkPrompt()).toEqual(subject);
  });

  it('pop should return Instance', () => {
    const subject = this.makeSubject();

    expect(subject.pop()).toEqual(subject);
  });

  it('addCount should config promptKey', () => {
    const promptKey = 'test';
    const subject = this.makeSubject({ promptKey });

    subject.addCount();
    expect(subject.count).toEqual(1);
  });

  it('should get correct value', () => {
    const subject = this.makeSubject();

    expect(subject.count).toEqual(0);
  });

  it('should get count from locastorage', () => {
    const subject = this.makeSubject();

    subject.addCount().addCount();
    expect(subject.count).toEqual(2);
    subject._setCountToStorage();
    expect(localStorage.__STORE__[defaultPromptKey]).toBe('2');
  });

  it('should set count to locastorage', () => {
    const subject = this.makeSubject();

    subject.addCount().addCount();
    expect(subject._setCountToStorage()).toEqual(2);
  });

  it('should get correct value after addCount', () => {
    const subject = this.makeSubject();

    subject.addCount().addCount();
    expect(subject.count).toEqual(2);
  });

  it('should checkPromtp if the mininum count is not enough', () => {
    const subject = this.makeSubject();

    subject.pop = jest.fn();
    subject.addCount().addCount().checkPrompt();
    expect(subject.pop).not.toHaveBeenCalled();
  });

  it('should checkPromtp if the mininum count is exceed', () => {
    const subject = this.makeSubject();

    subject.pop = jest.fn();
    subject.addCount().addCount().addCount().checkPrompt();
    expect(subject.pop).toHaveBeenCalled();
  });

  it('should be restore count if localstorage has value', () => {
    localStorage.setItem(defaultPromptKey, 2);
    const installPromptBanner = new InstallPromptBanner();

    expect(installPromptBanner.count).toEqual(2);
  });
});
