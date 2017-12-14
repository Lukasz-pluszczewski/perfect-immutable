/**
 * Works like array.protype.pop but returns new array instead of mutating existing one
 * @param {array} arr source array
 * @return {array} new array with last element removed
 */
const immutablePop = arr => arr.slice(0, -1);

export default immutablePop;
