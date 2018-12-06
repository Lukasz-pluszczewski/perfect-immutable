import pop from '../pop';

describe('pop', () => {
  it('should remove last element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = pop(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'two']);
  });
});
