import checkPalindrome from './checkPalindrome';

describe('checkPalindrome', () => {
  it('should return true when the input string is a palindrome', () => {
    //then
    expect(checkPalindrome("aabaa")).toBeTruthy();
    expect(checkPalindrome("a")).toBeTruthy();
    expect(checkPalindrome("abacaba")).toBeTruthy();
    expect(checkPalindrome("z")).toBeTruthy();
    expect(checkPalindrome("hlbeeykoqqqqokyeeblh")).toBeTruthy();
    expect(checkPalindrome("hlbeeykoqqqokyeeblh")).toBeTruthy();
  });

  it('should return false when the input string isnt a palindrome', () => {
    //then
    expect(checkPalindrome("abac")).toBeFalsy();
    expect(checkPalindrome("az")).toBeFalsy();
    expect(checkPalindrome("aaabaaaa")).toBeFalsy();
    expect(checkPalindrome("zzzazzazz")).toBeFalsy();
  });
});