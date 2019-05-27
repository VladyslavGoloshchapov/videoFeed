import _ from "lodash";
var fail = (message: string) => {
  throw new Error(message || "Assertion failed");
};
type Class = {new (...args: any[]): any};
const Assert = {
  /**
   * Unconditional fail. Useful for fall-through switch or if series.
   * @param {string} message
   * @throws {gs.error.AssertionError}
   */
  fail: fail,

  /**
   * Ensure value is an Array.
   * @param {Array} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isArray: function(value: any, message: string) {
    if (!_.isArray(value)) {
      fail(message || "value is not an array: " + value);
    }
  },

  /**
   * @param {Array} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isNotEmptyArray: function(value: any, message: string) {
    if (!(_.isArray(value) && value.length > 0)) {
      fail(message || "value is not an empty array: " + value);
    }
  },

  /**
   * Ensure value is a boolean.
   * @param {boolean} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isBoolean: function(value: any, message: string) {
    if (!_.isBoolean(value)) {
      fail(message || "value is not a boolean: " + value);
    }
  },

  /**
   * Ensure value is not undefined.
   * @param {*} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isDefined: function(value: any, message: string) {
    if (_.isUndefined(value)) {
      fail(message || "value is not defined: " + value);
    }
  },

  /**
   * Ensure value is a function.
   * @param {function} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isFunction: function(value: any, message: string) {
    if (!_.isFunction(value)) {
      fail(message || "value is not a function: " + value);
    }
  },

  /**
   * Ensure value is null.
   * @param {*} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isNull: function(value: any, message: string) {
    if (!_.isNull(value)) {
      fail(message || "value is not null: " + value);
    }
  },

  /**
   * Ensure value is a number.
   * @param {number} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isNumber: function(value: any, message: string) {
    if (!_.isNumber(value)) {
      fail(message || "value is not a number: " + value);
    }
  },

  /**
   * Ensure value is an object.
   * @param {object} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isObject: function(value: any, message: string) {
    if (!_.isObject(value)) {
      fail(message || "value is not an object: " + value);
    }
  },

  /**
   * Ensure value is a string.
   * @param {string} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isString: function(value: any, message: string) {
    if (!_.isString(value)) {
      fail(message || "value is not a string: " + value);
    }
  },

  /**
   * Ensure value is a string and not empty.
   * @param {string} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isNotEmptyString: function(value: any, message: string) {
    if (!(_.isString(value) && value.length > 0)) {
      fail(message || "value is not a string with characters: " + value);
    }
  },

  /**
   * Ensure expression or value is true.
   * @param {boolean} expression
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isTrue: function(expression: any, message: string) {
    if (expression !== true) {
      fail(message || "expression is not true: " + expression);
    }
  },

  /**
   * Ensure expression or value is false.
   * @param {boolean} expression
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isFalse: function(expression: any, message: string) {
    if (expression !== false) {
      fail(message || "expression is not false: " + expression);
    }
  },

  /**
   * Ensure object is instance of class
   * @param {object} object
   * @param {Class} clazz
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isInstanceOf: function(object: any, clazz: Class, message: string) {
    if (!(object instanceof clazz)) {
      fail(message || "object is not instance of " + clazz);
    }
  },

  /**
   * Ensure value is not undefined.
   * @param {*} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  isUndefined: function(value: any, message: string) {
    if (!_.isUndefined(value)) {
      fail(message || "value is not undefined: " + value);
    }
  },

  /**
   * Ensure value is not null.
   * @param {*} value
   * @param {string=} message
   * @throws {gs.error.AssertionError}
   */
  notNull: function(value: any, message: string) {
    if (_.isNull(value)) {
      fail(message || "value is null");
    }
  }
};
export default Assert;
