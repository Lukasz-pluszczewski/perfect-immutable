import { filter } from 'lodash';

/**
 * Returns new, array only with elements predicate returns truthy for
 * @param {array} arr source array
 * @param {function} predicate function invoked per iteration
 * @return {array} new, filtered array
 */
const immutableFilter = (arr, predicate) => filter(arr, predicate);

export default immutableFilter;
