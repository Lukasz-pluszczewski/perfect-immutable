import { immutableDelete } from '../../fp';

describe('fp/delete', () => {
  it('should remove one element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = immutableDelete(1)(arr1);

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['one', 'three']);
  });

  it('should remove one element from an object without mutating it', () => {
    const obj1 = { foo: 'one', bar: 'two', baz: 'three' };
    const obj2 = immutableDelete('bar')(obj1);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: 'one', baz: 'three' });
  });
});
