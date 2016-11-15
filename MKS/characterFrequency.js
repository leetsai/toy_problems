// Write a function that takes as its input a string and returns an array of
// arrays as shown below sorted in descending order by frequency and then by
// ascending order by character.

var characterFrequency = function(str) {
  var bank = {};
  var sortThis = [];

  for (var i = 0; i < str.length; i++) {
    if (bank[str[i]]) {
      bank[str[i]]++;
    } else {
      bank[str[i]] = 1;
    }
  }

  for (var key in bank) {
    sortThis.push([key, bank[key]]);
  }

  sortThis.sort(function(a, b) {
    if (b[1] === a[1]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }

    return b[1] - a[1];
  });

  return sortThis;
};
