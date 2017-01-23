var singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  nums.sort(function(a,b,) {return a - b;});

  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i+1]) {
      return nums[i];
    }
  }
};

singleNumber([1,1,2,2,3,4,4,5,5]); // 3
