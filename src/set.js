import { tail, isPlainObject, isEmpty, has, reduce, isNumber, isString, isArray, isFunction } from 'lodash';
import stringToPath from './stringToPath';
import splice from './splice';

/**
 * Immutably set not-nested value in target
 * @param {array|object} target to set the value in
 * @param {string|number} field field name or index to set the value in
 * @param {any|function} value value to set the in target or transformFunction
 * @param {boolean} setFunction if true, transformFunction will not be used as such but just saved in the path
 * @return {array|object} new array or object with altered value
 */
const setValue = (target, field, value, setFunction = false) => {
  if (isArray(target)) {
    if (!isNumber(field)) {
      throw new Error(`Index in array must be a number but it is ${typeof field} and has value ${field}`);
    }
    const newValue = isFunction(value) && !setFunction ? value(target[field]) : value;
    return splice(target, field, 1, newValue);
  }
  const newValue = isFunction(value) && !setFunction ? value(target[field]) : value;
  return {
    ...target,
    [field]: newValue,
  };
};

/**
 * Works like lodash _.set() but does not mutate target, works with arrays
 * @param {object|array} target source object or array
 * @param {string|object} path or index in object to set value in or object with paths/indexes as keys and values as values (if path is an object it ignores 'value')
 * @param {any|function} value to set in given path/index or transform function that accepts current value and returns new one
 * @param {boolean} setFunction if true and value provided is a function it will be treated as simple value and saved to the target (instead of used as transform)
 * @return {object|array} new object or array with value(s) changed
 */
const immutableSet = (target, path, value = null, setFunction = false) => {
  if (!isArray(target) && !isPlainObject(target)) {
    throw new Error(`First argument provided to immutableSet function must be a plain object or array but it's type is ${typeof target}`);
  }
  if (!isArray(path) && !isPlainObject(path) && !isString(path)) {
    throw new Error(`Path passed to immutableSet function must be a string, array of strings and numbers or plain object but it's type is ${typeof path}`);
  }

  if (!path || (isArray(path) && !path.length)) {
    return value;
  }
  if (isPlainObject(path)) {
    if (isEmpty(path)) {
      return target;
    }
    return reduce(path, (accu, value, path) => immutableSet(accu, path, value, setFunction), target);
  }

  let pathSplit = path;
  if (!isArray(path)) {
    pathSplit = stringToPath(path);
  }
  if (pathSplit.length === 1) {
    return setValue(target, pathSplit[0], value, setFunction);
  }
  let childTarget = {};
  if (has(target, pathSplit[0])) {
    childTarget = target[pathSplit[0]];
    if (!isPlainObject(childTarget) && !isArray(childTarget)) {
      throw new Error(`Part of 'path' provided is defined in 'object' and is neither plain JS object nor array but ${typeof childTarget}. It's most likely an error. Check the path and object provided to immutableSet function`);
    }
  }
  return setValue(target, pathSplit[0], immutableSet(childTarget, tail(pathSplit), value, setFunction));
};

export default immutableSet;
