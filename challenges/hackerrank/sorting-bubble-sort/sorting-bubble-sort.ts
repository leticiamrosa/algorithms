export const sortingBubbleSort = (arr: number[]): void => {

  let isSorted: boolean = false;
  let lastUnsorted: number = arr.length - 1;
  let counter: number = 0;

  while(!isSorted) {
    isSorted = true;

    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        isSorted = false
        counter++
      }
    }
    lastUnsorted--
  }

  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${arr[0]}`)
  console.log(`Last Element: ${arr[arr.length - 1]}`);
}

const swap = (arr: number[], indexOne: number, indexTwo: number): void => {
  const tmp = arr[indexOne];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = tmp;
}

const result = sortingBubbleSort([3,2,1]);

console.log(result);
