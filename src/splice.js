const immutableSplice = (arr, start, deleteCount, ...items) => [
  ...arr.slice(0, start),
  ...items,
  ...arr.slice(start + deleteCount),
];

export default immutableSplice;
