import filter from 'lodash/filter';

/**
 * Returns new, array only with elements predicate returns truthy for
 * @param {array|object} source array or object
 * @param {function} predicate function invoked per iteration
 * @return {array|object} new, filtered array or object
 */
const immutableFilter = (source, predicate) => filter(source, predicate);

export default immutableFilter;
