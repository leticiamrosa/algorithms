export const checkPalindrome = (inputString) => {
  const regex = /[\W_]/g;
  const lowRegStr = inputString.toLowerCase().replace(regex, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
};

export default checkPalindrome;