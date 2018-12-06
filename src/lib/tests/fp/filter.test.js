import { filter } from '../../fp';

describe('fp/filter', () => {
  it('should create new array with only elements predicate returned true for', () => {
    const arr1 = [5, 2, 3, 1, 5];
    const arr2 = filter(el => el > 2)(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual([5, 3, 5]);
  });
});
