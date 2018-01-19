import { expect } from 'chai';
import immutableDelete from '../src/delete';

describe('delete', () => {
  it('should remove one element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = immutableDelete(arr1, 1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'three']);
  });

  it('should remove one element from an object without mutating it', () => {
    const obj1 = { foo: 'one', bar: 'two', baz: 'three' };
    const obj2 = immutableDelete(obj1, 'bar');

    expect(obj2, 'Newly created object equals source object. It has probably been mutated').to.not.equal(obj1);
    expect(obj2).to.be.deep.equal({ foo: 'one', baz: 'three' });
  });
});
