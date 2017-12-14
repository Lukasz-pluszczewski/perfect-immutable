(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
	(factory((global['perfect-immutable'] = {}),global._));
}(this, (function (exports,lodash) { 'use strict';

// see `_stringToPath.js` file in lodash repository
var pathPartReg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var backslashReg = /\\(\\)?/g;

var stringToPath = function stringToPath(string) {
  var result = [];
  string.replace(pathPartReg, function (match, number, quote, string) {
    if (quote) {
      result.push(string.replace(backslashReg, '$1'));
    } else {
      result.push(number ? parseInt(number) : match);
    }
  });
  return result;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var immutableSplice = function immutableSplice(arr, start, deleteCount) {
  for (var _len = arguments.length, items = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    items[_key - 3] = arguments[_key];
  }

  return [].concat(toConsumableArray(arr.slice(0, start)), items, toConsumableArray(arr.slice(start + deleteCount)));
};

/**
 * Immutably set not-nested value in target
 * @param {array|object} target to set the value in
 * @param {string|number} field field name or index to set the value in
 * @param {any} value value to set the in target
 * @return {array|object} new array or object with altered value
 */
var setValue = function setValue(target, field, value) {
  if (lodash.isArray(target)) {
    if (!lodash.isNumber(field)) {
      throw new Error('Index in array must be a number but it is ' + (typeof field === 'undefined' ? 'undefined' : _typeof(field)) + ' and has value ' + field);
    }
    return immutableSplice(target, field, 1, value);
  }
  return _extends({}, target, defineProperty({}, field, value));
};

/**
 * Works like lodash _.set() but does not mutate target, works with arrays
 * @param {object|array} target source object or array
 * @param {string|object} path or index in object to set value in or object with paths/indexes as keys and values as values (if path is an object it ignores 'value')
 * @param {any} value to set in given path/index
 * @return {object|array} new object or array with value(s) changed
 */
var immutableSet = function immutableSet(target, path) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!lodash.isArray(target) && !lodash.isPlainObject(target)) {
    throw new Error('First argument provided to immutableSet function must be a plain object or array but it\'s type is ' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)));
  }
  if (!lodash.isArray(path) && !lodash.isPlainObject(path) && !lodash.isString(path)) {
    throw new Error('Path passed to immutableSet function must be a string, array of strings and numbers or plain object but it\'s type is ' + (typeof path === 'undefined' ? 'undefined' : _typeof(path)));
  }

  if (!path || lodash.isArray(path) && !path.length) {
    return value;
  }
  if (lodash.isPlainObject(path)) {
    if (lodash.isEmpty(path)) {
      return target;
    }
    return lodash.reduce(path, function (accu, value, path) {
      return immutableSet(accu, path, value);
    }, target);
  }

  var pathSplit = path;
  if (!lodash.isArray(path)) {
    pathSplit = stringToPath(path);
  }
  if (pathSplit.length === 1) {
    return setValue(target, pathSplit[0], value);
  }
  var childTarget = {};
  if (lodash.has(target, pathSplit[0])) {
    childTarget = target[pathSplit[0]];
    if (!lodash.isPlainObject(childTarget) && !lodash.isArray(childTarget)) {
      throw new Error('Part of \'path\' provided is defined in \'object\' and is neither plain JS object nor array but ' + (typeof childTarget === 'undefined' ? 'undefined' : _typeof(childTarget)) + '. It\'s most likely an error. Check the path and object provided to immutableSet function');
    }
  }
  return setValue(target, pathSplit[0], immutableSet(childTarget, lodash.tail(pathSplit), value));
};

var set = immutableSet;
var splice = immutableSplice;

var index = {
  set: set,
  splice: splice
};

exports.set = set;
exports.splice = splice;
exports['default'] = index;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=perfect-immutable.js.map
