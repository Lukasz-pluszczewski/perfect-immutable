import { tail, isPlainObject, isEmpty, has, reduce } from 'lodash';

/**
 * Works like lodash _.set() but does not mutate object (doesn't work with array style keys like `someArray[2].anotherField`)
 * @param {object} object source object
 * @param {string|object} path in object to set value in or object with paths as keys and values as values (if path is an object it ignores 'value')
 * @param {any} value to set in given path
 * @param {string} delimiter path delimiter; by default: '.'
 * @return {object} new object with value(s) changed
 */
const immutableSet = (object, path, value = null, delimiter = '.') => {
  // console.log('immutableSet', {object, path, value, delimiter});
  if (!path) {
    return value;
  }
  if (isPlainObject(path)) {
    if (isEmpty(path)) {
      return object;
    }
    return reduce(path, (accu, value, path) => immutableSet(accu, path, value, delimiter), object);
  }

  const pathSplit = path.split(delimiter);
  if (pathSplit.length === 1) {
    return {
      ...object,
      [path]: value,
    };
  }
  let childObject = {};
  if (has(object, pathSplit[0])) {
    childObject = object[pathSplit[0]];
    if (!isPlainObject(childObject)) {
      throw new Error(`Part of 'path' provided is defined in 'object' and is not a plain JS object but ${typeof childObject}. It's most likely an error. Check the path and object provided to immutableSet function`);
    }
  }
  return {
    ...object,
    [pathSplit[0]]: immutableSet(childObject, tail(pathSplit).join(delimiter), value, delimiter),
  };
};

export default immutableSet;
