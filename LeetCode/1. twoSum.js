var twoSum = function(nums, target) {
  var newArr = nums.slice().sort(function(a, b) {return a - b;});
  var pair = [];

  for (var i = 0, j = newArr.length - 1; i < j;) {
    if (newArr[i] + newArr[j] === target) {
      pair.push(newArr[i],newArr[j]);
      i++;
    } else if (newArr[i] + newArr[j] < target) {
      i++;
    } else if (newArr[i] + newArr[j] > target) {
      j--;
    }
  }

  return [nums.indexOf(pair[0]), nums.lastIndexOf(pair[1])];
};
