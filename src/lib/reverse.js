/**
 * Returns new, reversed array without mutating the source
 * @param {array} arr source array
 * @return {array} new, reversed array
 */
const immutableReverse = arr => [...arr].reverse();

export default immutableReverse;
