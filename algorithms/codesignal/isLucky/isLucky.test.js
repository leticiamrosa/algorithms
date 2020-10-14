import isLucky from './isLucky';

describe('isLucky', () => {
  it('should return true when the ticket is lucky', () => {
    // given
    const ticket = '1230';

    //when
    const expectedIsLucky = isLucky(ticket);

    //then
    expect(expectedIsLucky).toBeTruthy();
  });

  it('should return true when the ticket isnt lucky', () => {
    // given
    const ticket = '239017';

    //when
    const expectedIsLucky = isLucky(ticket);

    //then
    expect(expectedIsLucky).toBeFalsy();
  });

  it('should return correctly', () => {
    expect(isLucky(134008)).toBe(true);
    expect(isLucky(10)).toBeFalsy();
    expect(isLucky(11)).toBeTruthy();
    expect(isLucky(1010)).toBeTruthy();
    expect(isLucky(261534)).toBeFalsy();
    expect(isLucky(100000)).toBeFalsy();
    expect(isLucky(999999)).toBeTruthy();
    expect(isLucky(123321)).toBeTruthy();
  });
});