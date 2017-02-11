// How many distinct ways are there to get to a score of 'n'
// given that a basketball team can score 1, 2, or 3 points at a time

var basketball = function(score) {
  // There are 1, 1, and 2 ways to score 0, 1, and 2 points in basketball
  let scores = [1,1,2];

  for (let i = 3; i <= score; i++) {
    scores[i] = scores[i - 3] + scores[i - 2] + scores[i - 1];
  }

  return scores[score];
};

console.log(basketball(0)); // 1
console.log(basketball(1)); // 1
console.log(basketball(2)); // 2
console.log(basketball(3)); // 4
console.log(basketball(4)); // 7
console.log(basketball(5)); // 13
console.log(basketball(6)); // 24
