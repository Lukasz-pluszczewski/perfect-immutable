import { expect } from 'chai';
import { unshift } from '../../src/fp';

describe('fp/unshift', () => {
  it('should add elements to the beginning of an array without mutating it', () => {
    const arr1 = ['three'];
    const arr2 = unshift('one', 'two')(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'two', 'three']);
  });
});
