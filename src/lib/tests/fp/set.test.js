import { set } from '../../fp';

describe('fp/set', () => {
  it('should set a value without mutating object', () => {
    const obj1 = { field: 1, unmodifiedField: { field: 3 } };

    const obj2 = set('field', 2)(obj1);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    // Unmodified nested object has been unnecessarily replaced with new one
    expect(obj2.unmodifiedField).toBe(obj1.unmodifiedField);
    expect(obj2).toEqual({
      field: 2,
      unmodifiedField: { field: 3 },
    });
  });
});
