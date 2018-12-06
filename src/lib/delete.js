/**
 * Creates new array or object with one element removed
 * @param {array|object} source array|object
 * @param {number|string} index of element we want to be removed
 * @return {array|object} new array|object with one element removed
 */
const immutableDelete = (source, index) => {
  if (Array.isArray(source)) {
    return source.slice(0, index).concat(source.slice(index + 1));
  }
  const { [index]: removed, ...rest } = source; // eslint-disable-line no-unused-vars
  return rest;
};

export default immutableDelete;
