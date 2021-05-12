export const reverseArray = (arr): Array<number> => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // save the ref on the tmp
    let tmp = arr[start];

    arr[start] = arr[end]
    arr[end] = tmp

    start++
    end--
  };

  return arr
};

const arr = [1,4,3,2];
const result = reverseArray(arr);

console.log(`Result: ${result}`)
