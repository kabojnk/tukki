/** @module tukki */

'use strict';

const debug = require('debug');
const get = require('lodash/get');

class Tukki {

  constructor(namespace) {
    this.namespace = namespace;
    this.error = debug(`${namespace}:error`);
    this.warn = debug(`${namespace}:warn`);
    this.debug = debug(`${namespace}:debug`);
    this.info = debug(`${namespace}:info`);
    this.verbose = debug(`${namespace}:verbose`);

    this.error.color = 1;
    this.warn.color = 3;
    this.debug.color = 5;
    this.info.color = 4;
    this.verbose.color = 2;
  }

  e(message, error) {
    this.error(message);
    if (error && get(error, 'toString', false)) {
      this.error(error.toString());
    }
  }

  w(message) {
    this.warn(message);
  }

  d(message) {
    this.debug(message);
  }

  i(message) {
    this.info(message);
  }

  v(message) {
    this.verbose(message);
  }
}

module.exports = namespace => new Tukki(namespace);
