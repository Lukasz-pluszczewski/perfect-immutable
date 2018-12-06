import reverse from '../reverse';

describe('reverse', () => {
  it('should reverse an array without mutating it', () => {
    const arr1 = ['three', 'two', 'one'];
    const arr2 = reverse(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'two', 'three']);
  });
});
