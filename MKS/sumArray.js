// Given an array of numbers, calculate the greatest contiguous sum of numbers
// in it. A single array item will count as a contiguous sum.

function sumArray(arr) {
  let finalMax = arr[0];
  let currentMax = arr[0];

  for (var i = 1; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i]);
    finalMax = Math.max(currentMax, finalMax);
  }

  return finalMax;
}

console.log(sumArray([ 1, 2, 3 ])); //	6
console.log(sumArray([ 4, -1, 5 ])); //	8
console.log(sumArray([ 10, -11, 11 ])); //	11
console.log(sumArray([ 1, 2, 3, -6, 4, 5, 6 ])); //	15
