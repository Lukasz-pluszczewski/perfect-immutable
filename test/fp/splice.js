import { expect } from 'chai';
import { splice } from '../../src/fp';

describe('fp/splice', () => {
  it('should remove given number of elements without mutating original array', () => {
    const arr1 = ['one', 'two', 'three', 'four', 'five'];
    const arr2 = splice(1, 2)(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'four', 'five']);
  });
  it('should remove given number of elements and add others without mutating original array', () => {
    const arr1 = ['one', 'two', 'three', 'four', 'five'];
    const arr2 = splice(1, 2, 'second', 'third')(arr1);

    expect(arr2, 'Newly created array equals source array. It has probably been mutated').to.not.equal(arr1);
    expect(arr2).to.be.deep.equal(['one', 'second', 'third', 'four', 'five']);
  });
});