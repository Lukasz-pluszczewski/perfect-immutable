export default immutablePush;
/**
 * Works like array.protype.pop but returns new array instead of mutating existing one
 * @param {array} arr source array
 * @param {array} newEntries entries to add to the array
 * @return {array} new array with newEntries added
 */
declare function immutablePush(arr: any, ...newEntries: any): any;
