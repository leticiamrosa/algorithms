/**
 * Hackerrank - A very Big Sum
 * 
 * In this challenge, you are required to calculate 
 * and print the sum of the elements in an array, keeping in
 * mind that some of those integers may be quite large.
 * 
 * Function Description
 * 
 * Complete the aVeryBigSum function in the editor below. 
 * It must return the sum of all array elements.
 *
 * aVeryBigSum has the following parameters(s);
 * int ar[n]: an array of integers
 * 
 * return: the sum of all array elements
 * 
 * input format
 * -> The first line of the input consists of an integer n.
 * -> The next line contains n space-separated integers contained in the array
 * 
 * Constraints
 * 1 <= n <= 10
 * - < ar[i] < 10 10
 */




function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val >= 25 < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(55))