import { expect } from 'chai';
import { set } from '../../src/fp';

describe('fp/set', () => {
  it('should set a value without mutating object', () => {
    const obj1 = { field: 1, unmodifiedField: { field: 3 } };

    const obj2 = set('field', 2)(obj1);

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2.unmodifiedField, 'Unmodified nested object has been unnecessarily replaced with new one')
      .to.equal(obj1.unmodifiedField);
    expect(obj2).to.deep.equal({
      field: 2,
      unmodifiedField: { field: 3 },
    });
  });
});
