export default immutableSplice;
/**
 * Works like array.prototype.splice but returns new array instead of mutating it
 * @param {array} arr source array
 * @param {number} start zero-based index at which to start changing the array
 * @param {number} deleteCount an integer indicating the number of old array elements to remove
 * @param {array} items the elements to add to the array, beginning at the `start` index
 * @return {array} new array
 */
declare function immutableSplice(arr: any, start: number, deleteCount: number, ...items: any): any;
