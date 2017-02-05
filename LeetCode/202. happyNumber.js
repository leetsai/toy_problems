// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 19 is a happy number
//
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var happyNumber = function(n) {
  // Only 1 and 7 are the only happy single-digit numbers
  if (n === 1 || n === 7) {
    return true;
  }

  if (n < 10) {
    return false;
  }

  // Turn 'n' to a string so we can loop
  n = n.toString();
  let next = 0;
  let temp;
  for (let i = 0; i < n.length; i++) {
    temp = Math.floor(n[i]);
    next += Math.pow(temp, 2);
  }

  return happyNumber(next);
}

console.log(happyNumber(19)); // true
console.log(happyNumber(12345)); // false
