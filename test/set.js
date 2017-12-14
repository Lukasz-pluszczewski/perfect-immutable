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
  it('should set value in nested path with custom path delimiter', () => {
    const obj1 = { field: { subField: 1 }, unmodifiedField: { field: 3 } };

    const obj2 = set(obj1, 'field/subField', 2, '/');

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
});
