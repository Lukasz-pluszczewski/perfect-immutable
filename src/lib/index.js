import immuSet from "./set";
import immuSplice from "./splice";
import immuPush from "./push";
import immuPop from "./pop";
import immuShift from "./shift";
import immuUnshift from "./unshift";
import immuSort from "./sort";
import immuReverse from "./reverse";
import immuDelete from "./delete";
import immuFilter from "./filter";

import immuFp from "./fp/index";

export const set = immuSet;
export const splice = immuSplice;
export const push = immuPush;
export const pop = immuPop;
export const shift = immuShift;
export const unshift = immuUnshift;
export const sort = immuSort;
export const reverse = immuReverse;
export const immutableDelete = immuDelete;
export const filter = immuFilter;
export const fp = immuFp;

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
  fp,
};
