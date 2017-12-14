import { expect } from 'chai';
import pop from '../src/pop';

describe('pop', () => {
  it('should remove last element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = pop(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'two']);
  });
});
