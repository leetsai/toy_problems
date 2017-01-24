var trap = function(height) {
  var left = [];
  var right = [];
  var pointer = 0;
  var water = 0;

  for (var i = 0; i < height.length; i++) {
    if (pointer < height[i]) {
      pointer = height[i];
    }
    left.push(pointer - height[i]);
  }

  pointer = 0;
  for (var j = height.length - 1; j >= 0; j--) {
    if (pointer < height[j]) {
      pointer = height[j];
    }
    right.unshift(pointer - height[j]);
  }

  for (var k = 0; k < left.length; k++) {
    water += Math.min(left[k], right[k]);
  }

  return water;
};

console.log(trap([0,2,0])); // 0
console.log(trap([2,0,1])); // 1
