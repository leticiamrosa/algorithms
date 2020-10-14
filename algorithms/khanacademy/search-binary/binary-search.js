const vetor = [1,2,3,4,5];


const binSearchLogic = (vector, left, right, value) => {
  if (right >= left) {
    const index = parseInt(left + (right - left) / 2);
    if (vetor[index] === value) {
      return value;
    }

    if (vector[index] > value) {
      return binSearch(vector, left, index - 1, value);
    };

    return binSearch(vector, left + 1, right, value);
  }

  return -1;
};

const binSearch = (array, targetValue) => {
	var min = 0;
	var max = array.length - 1;
  var guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);
        if (array[guess] === targetValue) {
            return guess;
        } else if (targetValue > array[guess]) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
  return -1
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(binSearch(primes, 73))
