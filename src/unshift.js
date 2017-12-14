/**
 * Returns new array with new element(a) added at the beginning
 * @param {array} arr source array
 * @param {array} newEntries entries to be added at the beginning of the array (will appear in the same order as they were provided to the function)
 * @return {array} new array with newEntries added at the beginning
 */
const immutableUnshift = (arr, ...newEntries) =>
  newEntries.reverse().reduce((result, newEntry) => [newEntry, ...result], arr);

export default immutableUnshift;
