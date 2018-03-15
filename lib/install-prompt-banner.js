(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["install-prompt-banner"] = factory();
	else
		root["install-prompt-banner"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var installPromptBanner =
/**
 * Creates an instance of installPromptBanner.
 * @param {object} { promptKey = '~installPromptBanner~', minimumPrompt = 2 }={}
 * @memberof installPromptBanner
 */
function installPromptBanner() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$promptKey = _ref.promptKey,
      promptKey = _ref$promptKey === undefined ? '~installPromptBanner~' : _ref$promptKey,
      _ref$minimumPrompt = _ref.minimumPrompt,
      minimumPrompt = _ref$minimumPrompt === undefined ? 2 : _ref$minimumPrompt;

  _classCallCheck(this, installPromptBanner);

  this._handleBeforeInstallPrompt = function (e) {
    try {
      localStorage.setItem(_this.options.promptKey, _this.count);
    } catch (e) {
      // do nothing
    }
  };

  this._handleBeforeInstallPrompt = function (e) {
    var count = _this._getCountFromStorage();

    if (count <= _this.options.minimumPrompt) {
      e.preventDefault();
      _this.deferredPrompt = e;

      return false;
    }

    return true;
  };

  this._getCountFromStorage = function () {
    var currentPVCount = 0;

    try {
      currentPVCount = localStorage.getItem(_this.options.promptKey);
    } catch (e) {
      // do nothing
    }

    return +currentPVCount;
  };

  this._setCountToStorage = function () {
    try {
      localStorage.setItem(_this.options.promptKey, _this.count);
    } catch (e) {
      // do nothing
    }

    return _this.count;
  };

  this.checkPrompt = function () {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (force || _this.count > _this.options.minimumPrompt) {
      _this.pop();
    }

    return _this;
  };

  this.pop = function () {
    if (_this.deferredPrompt) {
      _this.deferredPrompt.prompt();
      _this.deferredPrompt = null;
    }

    return _this;
  };

  this.addCount = function () {
    _this.count++;

    return _this;
  };

  this.inited = false;
  this.deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', this._handleBeforeInstallPrompt, false);
  window.addEventListener('beforeunload', this._handleBeforeUnload, false);
  this.options = {
    promptKey: promptKey,
    minimumPrompt: minimumPrompt
  };
  this.count = this._getCountFromStorage();

  return this;
}

/**
 * addCount from localStorage
 * @memberof installPromptBanner
 */
;

exports.default = installPromptBanner;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=install-prompt-banner.js.map