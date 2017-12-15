import { expect } from 'chai';
import { shift } from '../../src/fp';

describe('fp/shift', () => {
  it('should remove first element from an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = shift(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['two', 'three']);
  });
});
