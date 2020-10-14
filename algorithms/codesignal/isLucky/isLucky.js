/**
 * Ticket numbers usually consist of an even number of digits
 * A ticket number is considered lucky if:
 * The sum of the first half of the digits is equal to the sum of the second half
 *
 * Given a ticket number n, determine if its lucky or not
 *
 * A ticket number represented as a positive integer with an even number of digits.
 */

export default function isLucky(n) {
  n = n.toString();

  let half = n.length / 2;

  let firstHalf = n.substring(0, half).split('').reduce((a,b) => {
      return parseInt(a) + parseInt(b);
  });

  let secondHalf = n.substring(half, n.lenght).split('').reduce((a,b) => {
      return parseInt(a) + parseInt(b);
  });

  return firstHalf === secondHalf;
};

const ticket = '132132930821';

console.log(`result: ${isLucky(ticket)}`)