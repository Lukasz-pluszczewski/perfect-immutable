import { expect } from 'chai';
import { reverse } from '../../src/fp';

describe('fp/reverse', () => {
  it('should reverse an array without mutating it', () => {
    const arr1 = ['three', 'two', 'one'];
    const arr2 = reverse(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'two', 'three']);
  });
});
