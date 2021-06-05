export default immutableFilter;
/**
 * Returns new, array only with elements predicate returns truthy for
 * @param {array|object} source array or object
 * @param {function} predicate function invoked per iteration
 * @return {array|object} new, filtered array or object
 */
declare function immutableFilter(source: any | object, predicate: Function): any | object;
