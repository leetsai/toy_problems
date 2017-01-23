// Given a single input string, write a function that produces all possible
// anagrams of a string and outputs them as an array. At first, don’t worry
// about repeated strings. What time complexity is your solution?

function allAnagrams (string) {
  let anagrams = {};

  (function helper(anagram, choices) {
    if (choices.length === 0) {
      anagrams[anagram] = 1;
    }

    for (var i = 0; i < choices.length; i++) {
      helper(anagram + choices[i], choices.slice(0, i) + choices.slice(i + 1));
    }
  })("", string);

  return Object.keys(anagrams);
}

console.log(allAnagrams("abc")); // [ "abc", "acb", "bac", "bca", "cab", "cba" ]
