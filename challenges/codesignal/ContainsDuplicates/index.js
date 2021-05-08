export function containsDuplicates(a) {

  let tmp = {};
  let result = false;
  for (let i = 0; i < a.length; i++) {
      if (tmp[a[i]]) {
          return result = true;
      }
      tmp[a[i]] = true;
  };
  return result;

}


export function containsDuplicatesV2(a) {
  let result = false;

  // iterate over the array
  for (let i = 0; i < a.length; i++) {
    // compare the first and last index of an element
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      return result = true;
      // terminate the loop
    }
    return result;
  };
}


