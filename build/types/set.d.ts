export default immutableSet;
/**
 * Works like lodash _.set() but does not mutate target, works with arrays
 * @param {object|array} target source object or array
 * @param {string|object|number} argPath or index in object to set value in or object with paths/indexes as keys and values as values (if path is an object it ignores 'value')
 * @param {any|function} value to set in given path/index or transform function that accepts current value and returns new one
 * @param {boolean} setFunction if true and value provided is a function it will be treated as simple value and saved to the target (instead of used as transform)
 * @return {object|array} new object or array with value(s) changed
 */
declare function immutableSet(target: object | any, argPath: string | object | number, value?: any | Function, setFunction?: boolean): object | any;
