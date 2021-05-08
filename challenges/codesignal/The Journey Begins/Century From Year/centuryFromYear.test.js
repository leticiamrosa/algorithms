import centuryFromYear from './centuryFromYear';

describe('centuryFromYear', () => {
  it('should return the century from year', () => {
    //then
    expect(centuryFromYear(1905)).toBe(20);
    expect(centuryFromYear(1700)).toBe(17);
    expect(centuryFromYear(1988)).toBe(20);
    expect(centuryFromYear(2000)).toBe(20);
    expect(centuryFromYear(2001)).toBe(21);
    expect(centuryFromYear(200)).toBe(2);
    expect(centuryFromYear(374)).toBe(4);
  });
});