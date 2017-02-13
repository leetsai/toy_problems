// find the largest continuous sum

var example1 = [-1,-2,1,3];
var example2 = [1,2,3,4];

let maximumSum = function(arr) {
  let runningSum = 0;
  let trueMax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      runningSum = 0;
    } else if (runningSum + arr[i] > runningSum) {
      runningSum += arr[i];
      trueMax = runningSum;
    }
  }

  return trueMax;
};

console.log(maximumSum(example1)); // 4
console.log(maximumSum(example2)); // 10
