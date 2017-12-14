import { has, isEmpty, isPlainObject, reduce, tail } from 'lodash';

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

/**
 * Works like lodash _.set() but does not mutate object (doesn't work with array style keys like `someArray[2].anotherField`)
 * @param {object} object source object
 * @param {string|object} path in object to set value in or object with paths as keys and values as values (if path is an object it ignores 'value')
 * @param {any} value to set in given path
 * @param {string} delimiter path delimiter; by default: '.'
 * @return {object} new object with value(s) changed
 */
var immutableSet = function immutableSet(object, path) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var delimiter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

  // console.log('immutableSet', {object, path, value, delimiter});
  if (!path) {
    return value;
  }
  if (isPlainObject(path)) {
    if (isEmpty(path)) {
      return object;
    }
    return reduce(path, function (accu, value, path) {
      return immutableSet(accu, path, value, delimiter);
    }, object);
  }

  var pathSplit = path.split(delimiter);
  if (pathSplit.length === 1) {
    return _extends({}, object, defineProperty({}, path, value));
  }
  var childObject = {};
  if (has(object, pathSplit[0])) {
    childObject = object[pathSplit[0]];
    if (!isPlainObject(childObject)) {
      throw new Error('Part of \'path\' provided is defined in \'object\' and is not a plain JS object but ' + (typeof childObject === 'undefined' ? 'undefined' : _typeof(childObject)) + '. It\'s most likely an error. Check the path and object provided to immutableSet function');
    }
  }
  return _extends({}, object, defineProperty({}, pathSplit[0], immutableSet(childObject, tail(pathSplit).join(delimiter), value, delimiter)));
};

var set = immutableSet;

var index = {
  set: immutableSet
};

export { set };
export default index;
//# sourceMappingURL=perfect-immutable.mjs.map
