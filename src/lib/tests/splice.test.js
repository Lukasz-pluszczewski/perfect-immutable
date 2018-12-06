import splice from '../splice';

describe('splice', () => {
  it('should remove given number of elements without mutating original array', () => {
    const arr1 = ['one', 'two', 'three', 'four', 'five'];
    const arr2 = splice(arr1, 1, 2);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'four', 'five']);
  });
  it('should remove given number of elements and add others without mutating original array', () => {
    const arr1 = ['one', 'two', 'three', 'four', 'five'];
    const arr2 = splice(arr1, 1, 2, 'second', 'third');

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'second', 'third', 'four', 'five']);
  });
});
