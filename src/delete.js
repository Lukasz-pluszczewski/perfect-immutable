/**
 * Creates new array with one element removed
 * @param {array} arr source array
 * @param {number} index of element we want to be removed
 * @return {array} new array with one element removed
 */
const immutableDelete = (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1));

export default immutableDelete;
