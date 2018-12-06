import { unshift } from '../../fp';

describe('fp/unshift', () => {
  it('should add elements to the beginning of an array without mutating it', () => {
    const arr1 = ['three'];
    const arr2 = unshift('one', 'two')(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'two', 'three']);
  });
});
