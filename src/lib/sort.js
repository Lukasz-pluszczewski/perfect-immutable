/**
 * Returns new, sorted array without mutating the source
 * @param {array} arr source array
 * @param {function} compareFunction function to compare values
 * @return {array} new, sorted array
 */
const immutableSort = (arr, compareFunction) => [...arr].sort(compareFunction);

export default immutableSort;
