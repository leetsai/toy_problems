// Write a function that, given a string, finds the longest run of identical
// characters and returns an array containing the start and end indices of that
// run.

// If there are two runs of equal length, return the first one. Return [0,0]
// for no runs.

function longestRun(str) {
  let start = 0;
  let end = 1;
  let longestCount = 1;
  let longest = [0, 0];

  while (end <= str.length) {
    let count = end - start;
    if (count > longestCount) {
      longestCount = count;
      longest = [start, end - 1];
    }

    if (str[start] !== str[end]) {
      start = end;
    }
    end++;
  }

  return longest;
}

console.log(longestRun("abbbcc"));	// [ 1, 3 ]
console.log(longestRun("aabbc"));	// [ 0, 1 ]
console.log(longestRun(""));	// [ 0, 0 ]
console.log(longestRun("mississippi"));	// [ 2, 3 ]
console.log(longestRun("abcdefgh"));	// [ 0, 0 ]
console.log(longestRun("abccccccc"));	// [ 2, 8 ]
