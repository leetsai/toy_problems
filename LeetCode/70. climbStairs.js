// How many distinct ways are there to get to the top?
var climbStairs = function(n) {
  // There are 1, 1, and 2 ways to climb 0, 1, 2 steps
  let ways = [1,1,2];

  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 2] + ways[i - 1];
  }

  return ways[n];
};

console.log(climbStairs(0)); // 1
console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
