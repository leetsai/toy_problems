// Write a function that accepts an array of integers and returns the largest
// product possible from three of those numbers.

function largestProductOfThree (arr) {
  arr.sort((a, b) => a - b);

  const last = arr.length - 1;
  const rightProduct = arr[last] * arr[last - 1] * arr[last - 2];
  const twoNegProduct = arr[0] * arr[1] * arr[last];

  return Math.max(rightProduct, twoNegProduct);
}

console.log(largestProductOfThree([ 2, 1, 3, 7 ])); //	42
console.log(largestProductOfThree([ 0, 2, 3 ])); //	0
