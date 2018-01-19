import { curryRight, filter, has, isArray, isEmpty, isFunction, isNumber, isPlainObject, isString, reduce, tail } from 'lodash';

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













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
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

/**
 * Works like array.prototype.splice but returns new array instead of mutating it
 * @param {array} arr source array
 * @param {number} start zero-based index at which to start changing the array
 * @param {number} deleteCount an integer indicating the number of old array elements to remove
 * @param {array} items the elements to add to the array, beginning at the `start` index
 * @return {array} new array
 */
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
 * @param {any|function} value value to set the in target or transformFunction
 * @param {boolean} setFunction if true, transformFunction will not be used as such but just saved in the path
 * @return {array|object} new array or object with altered value
 */
var setValue = function setValue(target, field, value) {
  var setFunction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (isArray(target)) {
    if (!isNumber(field)) {
      throw new Error('Index in array must be a number but it is ' + (typeof field === 'undefined' ? 'undefined' : _typeof(field)) + ' and has value ' + field);
    }
    var _newValue = isFunction(value) && !setFunction ? value(target[field]) : value;
    return immutableSplice(target, field, 1, _newValue);
  }
  var newValue = isFunction(value) && !setFunction ? value(target[field]) : value;
  return _extends({}, target, defineProperty({}, field, newValue));
};

/**
 * Works like lodash _.set() but does not mutate target, works with arrays
 * @param {object|array} target source object or array
 * @param {string|object} path or index in object to set value in or object with paths/indexes as keys and values as values (if path is an object it ignores 'value')
 * @param {any|function} value to set in given path/index or transform function that accepts current value and returns new one
 * @param {boolean} setFunction if true and value provided is a function it will be treated as simple value and saved to the target (instead of used as transform)
 * @return {object|array} new object or array with value(s) changed
 */
var immutableSet = function immutableSet(target, path) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var setFunction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isArray(target) && !isPlainObject(target)) {
    throw new Error('First argument provided to immutableSet function must be a plain object or array but it\'s type is ' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)));
  }
  if (!isArray(path) && !isPlainObject(path) && !isString(path)) {
    throw new Error('Path passed to immutableSet function must be a string, array of strings and numbers or plain object but it\'s type is ' + (typeof path === 'undefined' ? 'undefined' : _typeof(path)));
  }

  if (!path || isArray(path) && !path.length) {
    return value;
  }
  if (isPlainObject(path)) {
    if (isEmpty(path)) {
      return target;
    }
    return reduce(path, function (accu, value, path) {
      return immutableSet(accu, path, value, setFunction);
    }, target);
  }

  var pathSplit = path;
  if (!isArray(path)) {
    pathSplit = stringToPath(path);
  }
  if (pathSplit.length === 1) {
    return setValue(target, pathSplit[0], value, setFunction);
  }
  var childTarget = {};
  if (has(target, pathSplit[0])) {
    childTarget = target[pathSplit[0]];
    if (!isPlainObject(childTarget) && !isArray(childTarget)) {
      throw new Error('Part of \'path\' provided is defined in \'object\' and is neither plain JS object nor array but ' + (typeof childTarget === 'undefined' ? 'undefined' : _typeof(childTarget)) + '. It\'s most likely an error. Check the path and object provided to immutableSet function');
    }
  }
  return setValue(target, pathSplit[0], immutableSet(childTarget, tail(pathSplit), value, setFunction));
};

/**
 * Works like array.protype.pop but returns new array instead of mutating existing one
 * @param {array} arr source array
 * @param {array} newEntries entries to add to the array
 * @return {array} new array with newEntries added
 */
var immutablePush = function immutablePush(arr) {
  for (var _len = arguments.length, newEntries = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    newEntries[_key - 1] = arguments[_key];
  }

  return newEntries.reduce(function (result, newEntry) {
    return [].concat(toConsumableArray(result), [newEntry]);
  }, arr);
};

/**
 * Works like array.protype.pop but returns new array instead of mutating existing one
 * @param {array} arr source array
 * @return {array} new array with last element removed
 */
var immutablePop = function immutablePop(arr) {
  return arr.slice(0, -1);
};

/**
 * Returns new array with first element removed
 * @param {array} arr source array
 * @return {array} new array with first element removed
 */
var immutableShift = function immutableShift(arr) {
  return arr.slice(1);
};

/**
 * Returns new array with new element(a) added at the beginning
 * @param {array} arr source array
 * @param {array} newEntries entries to be added at the beginning of the array (will appear in the same order as they were provided to the function)
 * @return {array} new array with newEntries added at the beginning
 */
var immutableUnshift = function immutableUnshift(arr) {
  for (var _len = arguments.length, newEntries = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    newEntries[_key - 1] = arguments[_key];
  }

  return newEntries.reverse().reduce(function (result, newEntry) {
    return [newEntry].concat(toConsumableArray(result));
  }, arr);
};

/**
 * Returns new, sorted array without mutating the source
 * @param {array} arr source array
 * @param {function} compareFunction function to compare values
 * @return {array} new, sorted array
 */
var immutableSort = function immutableSort(arr, compareFunction) {
  return [].concat(toConsumableArray(arr)).sort(compareFunction);
};

/**
 * Returns new, reversed array without mutating the source
 * @param {array} arr source array
 * @return {array} new, reversed array
 */
var immutableReverse = function immutableReverse(arr) {
  return [].concat(toConsumableArray(arr)).reverse();
};

/**
 * Creates new array or object with one element removed
 * @param {array|object} val source array|object
 * @param {number|string} index of element we want to be removed
 * @return {array|object} new array|object with one element removed
 */
var immutableDelete$1 = function immutableDelete(val, index) {
  if (Array.isArray(val)) {
    return val.slice(0, index).concat(val.slice(index + 1));
  }
  var removed = val[index],
      rest = objectWithoutProperties(val, [index]); // eslint-disable-line no-unused-vars

  return rest;
};

/**
 * Returns new, array only with elements predicate returns truthy for
 * @param {array} arr source array
 * @param {function} predicate function invoked per iteration
 * @return {array} new, filtered array
 */
var immutableFilter = function immutableFilter(arr, predicate) {
  return filter(arr, predicate);
};

var set$2 = function set(path, value, setFunction) {
  return function (target) {
    return immutableSet(target, path, value, setFunction);
  };
};
var splice$1 = function splice(start, deleteCount) {
  for (var _len = arguments.length, items = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    items[_key - 2] = arguments[_key];
  }

  return function (arr) {
    return immutableSplice.apply(undefined, [arr, start, deleteCount].concat(items));
  };
};
var push$1 = function push() {
  for (var _len2 = arguments.length, newEntries = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    newEntries[_key2] = arguments[_key2];
  }

  return function (arr) {
    return immutablePush.apply(undefined, [arr].concat(newEntries));
  };
};
var pop$1 = curryRight(immutablePop);
var shift$1 = curryRight(immutableShift);
var unshift$1 = function unshift() {
  for (var _len3 = arguments.length, newEntries = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    newEntries[_key3] = arguments[_key3];
  }

  return function (arr) {
    return immutableUnshift.apply(undefined, [arr].concat(newEntries));
  };
};
var sort$1 = curryRight(immutableSort);
var reverse$1 = curryRight(immutableReverse);
var immutableDelete$2 = curryRight(immutableDelete$1);
var filter$2 = curryRight(immutableFilter);
var placeholder = curryRight.placeholder;

var immuFp = {
  set: set$2,
  splice: splice$1,
  push: push$1,
  pop: pop$1,
  shift: shift$1,
  unshift: unshift$1,
  sort: sort$1,
  reverse: reverse$1,
  immutableDelete: immutableDelete$2,
  filter: filter$2,
  placeholder: placeholder
};

var set = immutableSet;
var splice = immutableSplice;
var push = immutablePush;
var pop = immutablePop;
var shift = immutableShift;
var unshift = immutableUnshift;
var sort = immutableSort;
var reverse = immutableReverse;
var immutableDelete = immutableDelete$1;
var filter$1 = immutableFilter;
var fp = immuFp;

var index = {
  set: set,
  splice: splice,
  push: push,
  pop: pop,
  shift: shift,
  unshift: unshift,
  sort: sort,
  reverse: reverse,
  immutableDelete: immutableDelete,
  filter: filter$1,
  fp: fp
};

export { set, splice, push, pop, shift, unshift, sort, reverse, immutableDelete, filter$1 as filter, fp };
export default index;
//# sourceMappingURL=perfect-immutable.mjs.map
