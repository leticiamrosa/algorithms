import { reverseArray } from './array-ds';

describe('reverseArray method', (): void => {
  it('should return the array reverse', (): void => {
    // given
    const arr = [2,3,3,5,4,3];
    const expectedArry = [3,4,5,3,3,2];

    // when
    const result = reverseArray(arr);

    // then
    expect(result).toEqual(expectedArry);
    expect(reverseArray([5,6,7,5,4,3])).toEqual([5,6,7,5,4,3].reverse());
  });
})
