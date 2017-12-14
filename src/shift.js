/**
 * Returns new array with first element removed
 * @param {array} arr source array
 * @return {array} new array with first element removed
 */
const immutableShift = arr => arr.slice(1);

export default immutableShift;
