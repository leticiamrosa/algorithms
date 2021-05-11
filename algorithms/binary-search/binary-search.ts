type BinarySearchResult = number;

export const binarySearch = (list: Array<string>, element: string): BinarySearchResult  => {
  let listSorted = list.sort();
  let listStart = 0;
  let listEnd = listSorted.length - 1;

  while (listStart <= listEnd) {
    let listMiddle = Math.floor((listEnd + listStart) / 2);
    let shot = listSorted[listMiddle];

    if (shot === element) {
      return listMiddle
    }

    if (shot > element) {
      listEnd = listMiddle - 1
    } else {
      listStart = listMiddle + 1
    }
  }

  return -1
};

/**
 * Input
 */

const list: Array<string> = [
  'banana',
  'apple',
  'grape',
  'lemon',
  'orange',
  'strawberry'
];

const element = 'strawberry';

/**
 * Output
 */

const result = binarySearch(list, element);

console.log(`Result: ${result}`)


