// Implement a function that finds the longest palindrome in a given string.
// For example, in the string “My dad is a racecar athlete”, the longest
// palindrome is “a racecar a”. Count whitespaces as valid characters. Other
// palindromes in the above string include “dad”, “ete”, “ dad “ (including
// whitespace on each side of dad).

function longestPalindrome (str) {
  var newStr = "#" + str.split("").join("#") + "#";
  var longest = "";

  for (var i = 1; i < newStr.length - 1; i++) {
    var count = 1;
    var current = newStr[i];
    var left = newStr[i - 1];
    var right = newStr[i + 1];

    if (longest.length > (newStr.length - i) * 2) {
      return longest.replace(/[\#]/g, "");
    }

    while (left === right && left !== undefined && right !== undefined) {
      current = left + current + right;
      count++;
      left = newStr[i - count];
      right = newStr[i + count];

      if (left !== right || left === undefined || right === undefined) {
        if (current.length > longest.length) {
          longest = current;
        }
      }
    }
  }
}

longestPalindrome("aibohphobia") // "aibohphobia"
longestPalindrome("My dad is a racecar athlete")	// "a racecar a"
