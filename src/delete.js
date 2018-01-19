/**
 * Creates new array or object with one element removed
 * @param {array|object} val source array|object
 * @param {number|string} index of element we want to be removed
 * @return {array|object} new array|object with one element removed
 */
const immutableDelete = (val, index) => {
  if (Array.isArray(val)) {
    return val.slice(0, index).concat(val.slice(index + 1));
  }
  const { [index]: removed, ...rest } = val; // eslint-disable-line no-unused-vars
  return rest;
};

export default immutableDelete;
