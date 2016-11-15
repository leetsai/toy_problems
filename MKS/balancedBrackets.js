// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

// str: "(x + y) - (4)"	// true
// str: "(x + y) - (4)"	// true
// str: "(((10 ) ()) ((?)(:)))"	// true
// str: "[{()}]"	// true
// str: "(50)("	// false
// str: "[{]}"	// false

var isBalanced = function(str) {
  var newStr = str.replace(/[^\(\{\[\]\}\)]/g, "");
  var stacksOnStacks = [];

  if(newStr.length % 2) {
    return false;
  }

  var dictionary = {
    "[": "]",
    "(": ")",
    "{": "}"
  }

  for (var i = 0; i < str.length; i++) {
    if (dictionary[newStr[i]]) {
      stacksOnStacks.push(dictionary[newStr[i]]);
    } else if (newStr[i] !== stacksOnStacks.pop()) {
      return false;
    }
  }

  return true;
};
