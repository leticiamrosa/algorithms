function allLongestStrings(strings) {
  let longest = 0;

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest) {
      longest = strings[i].length;
    }
  }

  return longest;
};


const strings = ['adsad', 'adeqeeq', 'zzzzz']

console.log(`result: ${allLongestStrings(strings)}`)