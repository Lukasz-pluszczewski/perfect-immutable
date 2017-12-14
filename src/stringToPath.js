// see `_stringToPath.js` file in lodash repository
const pathPartReg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const backslashReg = /\\(\\)?/g;

const stringToPath = string => {
  const result = [];
  string.replace(pathPartReg, function(match, number, quote, string) {
    if (quote) {
      result.push(string.replace(backslashReg, '$1'));
    } else {
      result.push(number ? parseInt(number) : match);
    }
  });
  return result;
};

export default stringToPath;
