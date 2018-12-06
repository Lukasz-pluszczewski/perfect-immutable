import immutableDelete from '../delete';

describe('delete', () => {
  it('should remove one element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = immutableDelete(arr1, 1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'three']);
  });

  it('should remove one element from an object without mutating it', () => {
    const obj1 = { foo: 'one', bar: 'two', baz: 'three' };
    const obj2 = immutableDelete(obj1, 'bar');

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: 'one', baz: 'three' });
  });
});
