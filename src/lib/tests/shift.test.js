import shift from '../shift';

describe('shift', () => {
  it('should remove first element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = shift(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['two', 'three']);
  });
});
