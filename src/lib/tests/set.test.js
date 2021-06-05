import { set } from '../index';

describe('set', () => {
  it('should set a value without mutating object (but leaving untouched objects equal)', () => {
    const obj1 = { field: 1, unmodifiedField: { field: 3 } };

    const obj2 = set(obj1, 'field', 2);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    // Unmodified nested object has been unnecessarily replaced with new one
    expect(obj2.unmodifiedField).toBe(obj1.unmodifiedField);
    expect(obj2).toEqual({
      field: 2,
      unmodifiedField: { field: 3 },
    });
  });
  it('should set a deep nested value without mutating any of the nested objects', () => {
    const obj1 = { field: { subField: 1 }, unmodifiedField: { field: 3 } };

    const obj2 = set(obj1, 'field.subField', 2);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    // Intermediate object in path equals source. It has probably been mutated
    expect(obj2.field).not.toBe(obj1.field);
    // Unmodified nested object has been unnecessarily replaced with new one
    expect(obj2.unmodifiedField).toBe(obj1.unmodifiedField);
    expect(obj2).toEqual({
      field: { subField: 2 },
      unmodifiedField: { field: 3 },
    });
  });
  it('should set a collection of nested values', () => {
    const obj1 = { field1: { subField: 1 }, field2: { subField: 10 }, unmodifiedField: { field: 3 } };

    const obj2 = set(obj1, {
      'field1.subField': 2,
      'field2.subField': 20,
    });

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    // Intermediate object in path equals source. It has probably been mutated
    expect(obj2.field1).not.toBe(obj1.field1);
    // Intermediate object in path equals source. It has probably been mutated
    expect(obj2.field2).not.toBe(obj1.field2);
    // Unmodified nested object has been unnecessarily replaced with new one
    expect(obj2.unmodifiedField).toBe(obj1.unmodifiedField);
    expect(obj2).toEqual({
      field1: { subField: 2 },
      field2: { subField: 20 },
      unmodifiedField: { field: 3 },
    });
  });

  it('should set a value in array without mutating it', () => {
    const arr1 = [{ foo: 'one' }, { foo: 'two' }, { foo: 'four' }];

    const arr2 = set(arr1, '[2]', { foo: 'three' });

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    // Unmodified nested object has been unnecessarily replaced with new one
    expect(arr2[0]).toBe(arr1[0]);
    expect(arr2).toEqual([
      { foo: 'one' },
      { foo: 'two' },
      { foo: 'three' },
    ]);
  });
  it('should set value in nested array without mutating any of the nested objects and arrays', () => {
    const arr1 = [
      [
        { foo: 'one' },
        { bar: 'one' },
      ],
      [
        { foo: 'two' },
        { bar: 'two' },
      ],
      { foo: 'four' },
    ];

    const arr2 = set(arr1, '[1][1].bar', 'three');

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);

    // Intermediate object in path equals source. It has probably been mutated
    expect(arr2[1]).not.toBe(arr1[1]);
    // Intermediate object in path equals source. It has probably been mutated
    expect(arr2[1][1]).not.toBe(arr1[1][1]);

    // Unmodified nested object has been unnecessarily replaced with new one
    expect(arr2[0]).toBe(arr2[0]);

    expect(arr2).toEqual([
      [
        { foo: 'one' },
        { bar: 'one' },
      ],
      [
        { foo: 'two' },
        { bar: 'three' },
      ],
      { foo: 'four' },
    ]);
  });
  it('should set a collection of nested arrays', () => {
    const arr1 = [
      [
        { foo: 'one' },
        { bar: 'one' },
      ],
      [
        { foo: 'two' },
        { bar: 'two' },
      ],
      { foo: 'four' },
    ];

    const arr2 = set(arr1, {
      '[1][1].bar': 'three',
      '[1][0].foo': 'four',
    });

    // Newly created array equals source array. It has probably been mutated
    expect(arr2).not.toBe(arr1);

    // Intermediate object in path equals source. It has probably been mutated
    expect(arr2[1]).not.toBe(arr1[1]);
    // Intermediate object in path equals source. It has probably been mutated
    expect(arr2[1][1]).not.toBe(arr1[1][1]);

    // Unmodified nested object has been unnecessarily replaced with new one
    expect(arr2[0]).toBe(arr2[0]);

    expect(arr2).toEqual([
      [
        { foo: 'one' },
        { bar: 'one' },
      ],
      [
        { foo: 'four' },
        { bar: 'three' },
      ],
      { foo: 'four' },
    ]);
  });

  it('should set a function value if provided with appropriate flag', () => {
    const transformFunction = x => x * 2;
    const obj1 = { foo: [1, 2, 3] };

    const obj2 = set(obj1, 'foo[1]', transformFunction, true);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: [1, transformFunction, 3] });
  });
  it('should set a value in array returned by a transform function', () => {
    const transformFunction = x => x * 2;
    const obj1 = { foo: [1, 2, 3] };

    const obj2 = set(obj1, 'foo[1]', transformFunction);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: [1, 4, 3] });
  });
  it('should set a value in object returned by a transform function', () => {
    const transformFunction = x => x * 2;
    const obj1 = { foo: 1 };

    const obj2 = set(obj1, 'foo', transformFunction);

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: 2 });
  });
  it('should set a batch of values returned by a transform functions', () => {
    const transformFunction = x => x * 2;
    const obj1 = { foo: [1, 2, 3] };

    const obj2 = set(obj1, {
      'foo[1]': transformFunction,
      'foo[2]': transformFunction,
    });

    // Newly created object equals source object. It has probably been mutated
    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: [1, 4, 6] });
  });

  it('should return new value if provided with empty array path', () => {
    const obj1 = { foo: 2 };

    const result = set(obj1, [], 'newValue');

    expect(result).not.toBe(obj1);
    expect(result).toEqual('newValue');
  });

  it('should return new value if provided with empty string path', () => {
    const obj1 = { foo: 2 };

    const result = set(obj1, '', 'newValue');

    expect(result).not.toBe(obj1);
    expect(result).toEqual('newValue');
  });

  it('should return new value from a transform function if provided with empty array path', () => {
    const transformFunction = x => ({ foo: x.foo * 2 });
    const obj1 = { foo: 2 };

    const obj2 = set(obj1, [], transformFunction);

    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: 4 });
  });

  it('should return new value from a transform function if provided with empty string path', () => {
    const transformFunction = x => ({ foo: x.foo * 2 });
    const obj1 = { foo: 2 };

    const obj2 = set(obj1, '', transformFunction);

    expect(obj2).not.toBe(obj1);
    expect(obj2).toEqual({ foo: 4 });
  });

  it('should return unchanged target if provided with null path', () => {
    const obj1 = { foo: 'bar' };

    const obj2 = set(obj1, null, 'newValue');

    expect(obj2).toBe(obj1);
    expect(obj2).toEqual({ foo: 'bar' });
  });

  it('should return unchanged target if provided with empty object path', () => {
    const obj1 = { foo: 'bar' };

    const obj2 = set(obj1, {}, 'newValue');

    expect(obj2).toBe(obj1);
    expect(obj2).toEqual({ foo: 'bar' });
  });

  it('should throw an error when provided with unsupported value as a first argument (not object/array)', () => {
    expect(() => set(2, '[2]', 'value')).toThrowError(Error);
  });
  it('should not throw an error when provided with number as a second argument', () => {
    expect(() => set(['foo', 'bar', 'baz'], 1, 'value')).not.toThrowError(Error);
  });
  it('should set a value when provided with number as a second argument', () => {
    const arr1 = ['foo', 'bar', 'baz'];

    const arr2 = set(arr1, 1, 'newValue');

    // Newly created object equals source object. It has probably been mutated
    expect(arr2).not.toBe(arr1);
    expect(arr2).toEqual(['foo', 'newValue', 'baz']);
  });
  it('should throw an error when provided with unsupported value as a second argument (not object/array/string/number)', () => {
    expect(() => set({ foo: 'bar' }, () => {}, 'value')).toThrowError(Error); // eslint-disable-line no-empty-function
  });

  it('should throw an error when provided with path containing non-numerical array index', () => {
    expect(() => set({ foo: [] }, 'foo[bar]', 'value')).toThrowError(Error); // eslint-disable-line no-empty-function
  });

  it('should throw an error when provided with path pointing to unsupported value (no object/array)', () => {
    expect(() => set({ foo: 2 }, 'foo.bar', 'value')).toThrowError(Error); // eslint-disable-line no-empty-function
  });

  it('DELETE ME', () => {
    const arr1 = [
      { foo: 'two' },
      { bar: 'three' },
    ];

    const arr2 = set(arr1, [0, 'foo'], 'four');

    expect(arr2).toEqual([
      { foo: 'four' },
      { bar: 'three' },
    ]);
  })
});
