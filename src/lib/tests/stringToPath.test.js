import stringToPath from '../stringToPath';

describe('stringToPath', () => {
  it('should convert path string to array of field names', () => {
    const path = 'one.two.three';

    expect(stringToPath(path)).toEqual(['one', 'two', 'three']);
  });
  it('should convert path string with field names in brackets to array of field names', () => {
    const path = 'one[two]three';

    expect(stringToPath(path)).toEqual(['one', 'two', 'three']);
  });
  it('should convert path string with field names in brackets and quotes to array of field names', () => {
    const path = 'one["two"]three';

    expect(stringToPath(path)).toEqual(['one', 'two', 'three']);
  });
  it('should convert path string with array indexes to array of field names and indexes', () => {
    const path = 'one[2]three[4]five';

    expect(stringToPath(path)).toEqual(['one', 2, 'three', 4, 'five']);
  });
});
