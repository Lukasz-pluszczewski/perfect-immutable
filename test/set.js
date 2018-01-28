import { expect } from 'chai';
import { set } from '../src';

describe('set', () => {
  it('should set a value without mutating object (but leaving untouched objects equal)', () => {
    const obj1 = { field: 1, unmodifiedField: { field: 3 } };

    const obj2 = set(obj1, 'field', 2);

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2.unmodifiedField, 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(obj1.unmodifiedField);
    expect(obj2).to.deep.equal({
      field: 2,
      unmodifiedField: { field: 3 },
    });
  });
  it('should set a deep nested value without mutating any of the nested objects', () => {
    const obj1 = { field: { subField: 1 }, unmodifiedField: { field: 3 } };

    const obj2 = set(obj1, 'field.subField', 2);

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2.field, 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(obj1.field);
    expect(obj2.unmodifiedField, 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(obj1.unmodifiedField);
    expect(obj2).to.deep.equal({
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

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2.field1, 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(obj1.field1);
    expect(obj2.field2, 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(obj1.field2);
    expect(obj2.unmodifiedField, 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(obj1.unmodifiedField);
    expect(obj2).to.deep.equal({
      field1: { subField: 2 },
      field2: { subField: 20 },
      unmodifiedField: { field: 3 },
    });
  });

  it('should set a value in array without mutating it', () => {
    const arr1 = [{ foo: 'one' }, { foo: 'two' }, { foo: 'four' }];

    const arr2 = set(arr1, '[2]', { foo: 'three' });

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2[0], 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(arr1[0]);
    expect(arr2).to.deep.equal([
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

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);

    expect(arr2[1], 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(arr1[1]);
    expect(arr2[1][1], 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(arr1[1][1]);

    expect(arr2[0], 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(arr2[0]);

    expect(arr2).to.deep.equal([
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

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);

    expect(arr2[1], 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(arr1[1]);
    expect(arr2[1][1], 'Intermediate object in path equals source. It has probably been mutated')
      .to.not.equal(arr1[1][1]);

    expect(arr2[0], 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(arr2[0]);

    expect(arr2).to.deep.equal([
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

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2).to.be.deep.equal({ foo: [1, transformFunction, 3] });
  });
  it('should set a value returned by a transform function', () => {
    const transformFunction = x => x * 2;
    const obj1 = { foo: [1, 2, 3] };

    const obj2 = set(obj1, 'foo[1]', transformFunction);

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2).to.be.deep.equal({ foo: [1, 4, 3] });
  });
  it('should set a batch of values returned by a transform functions', () => {
    const transformFunction = x => x * 2;
    const obj1 = { foo: [1, 2, 3] };

    const obj2 = set(obj1, {
      'foo[1]': transformFunction,
      'foo[2]': transformFunction,
    });

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2).to.be.deep.equal({ foo: [1, 4, 6] });
  });

  it('should throw an error when provided with unsupported value as a first argument (not object/array)', () => {
    expect(() => set(2, '[2]', 'value')).to.throw(Error);
  });
  it('should not throw an error when provided with number as a second argument', () => {
    expect(() => set(['foo', 'bar', 'baz'], 1, 'value')).to.not.throw(Error);
  });
  it('should set a value when provided with number as a second argument', () => {
    const arr1 = ['foo', 'bar', 'baz'];

    const arr2 = set(arr1, 1, 'newValue');

    expect(arr2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.deep.equal(['foo', 'newValue', 'baz']);
  });
  it('should throw an error when provided with unsupported value as a second argument (not object/array/string/number)', () => {
    expect(() => set({ foo: 'bar' }, () => {}, 'value')).to.throw(Error); // eslint-disable-line no-empty-function
  });
});
