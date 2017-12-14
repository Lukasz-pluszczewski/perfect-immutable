import { expect } from 'chai';
import immutableDelete from '../src/delete';

describe('delete', () => {
  it('should remove one element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = immutableDelete(arr1, 1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'three']);
  });
});
