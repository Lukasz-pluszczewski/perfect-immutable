import { push } from '../../fp';

describe('fp/push', () => {
  it('should add elements to an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = push('four', 'five')(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'two', 'three', 'four', 'five']);
  });
});
