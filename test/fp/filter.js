import { expect } from 'chai';
import { filter } from '../../src/fp';

describe('fp/filter', () => {
  it('should create new array with only elements predicate returned true for', () => {
    const arr1 = [5, 2, 3, 1, 5];
    const arr2 = filter(el => el > 2)(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal([5, 3, 5]);
  });
});
