import { expect } from 'chai';
import { sort } from '../../src/fp';

describe('fp/sort', () => {
  it('should remove last element from an array without mutating it', () => {
    const arr1 = [5, 2, 3, 1, 5];
    const arr2 = sort((el1, el2) => el1 > el2)(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal([1, 2, 3, 5, 5]);
  });
});
