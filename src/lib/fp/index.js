import curryRight from "lodash/curryRight";

import immuSet from "../set";
import immuSplice from "../splice";
import immuPush from "../push";
import immuPop from "../pop";
import immuShift from "../shift";
import immuUnshift from "../unshift";
import immuSort from "../sort";
import immuReverse from "../reverse";
import immuDelete from "../delete";
import immuFilter from "../filter";

export const set = (path, value, setFunction) => (target) =>
  immuSet(target, path, value, setFunction);
export const splice =
  (start, deleteCount, ...items) =>
  (arr) =>
    immuSplice(arr, start, deleteCount, ...items);
export const push =
  (...newEntries) =>
  (arr) =>
    immuPush(arr, ...newEntries);
export const pop = curryRight(immuPop);
export const shift = curryRight(immuShift);
export const unshift =
  (...newEntries) =>
  (arr) =>
    immuUnshift(arr, ...newEntries);
export const sort = curryRight(immuSort);
export const reverse = curryRight(immuReverse);
export const immutableDelete = curryRight(immuDelete);
export const filter = curryRight(immuFilter);
export const placeholder = curryRight.placeholder;

export default {
  set,
  splice,
  push,
  pop,
  shift,
  unshift,
  sort,
  reverse,
  immutableDelete,
  filter,
  placeholder,
};
