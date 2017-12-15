import { expect } from 'chai';
import { push } from '../../src/fp';

describe('fp/push', () => {
  it('should add elements to an array without mutating it', () => {
    const arr1 = ['one', 'two', 'three'];
    const arr2 = push('four', 'five')(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'two', 'three', 'four', 'five']);
  });
});
