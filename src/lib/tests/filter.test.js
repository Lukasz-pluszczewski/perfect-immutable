import filter from '../filter';

describe('filter', () => {
  it('should create new array with only elements predicate returned true for', () => {
    const arr1 = [5, 2, 3, 1, 5];
    const arr2 = filter(arr1, el => el > 2);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual([5, 3, 5]);
  });
});
