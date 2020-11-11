function containsDuplicates(a) {

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
console.log(containsDuplicates([1, 2, 3, 1]))