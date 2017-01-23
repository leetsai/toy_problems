var isValid = function(s) {
  if (s.length === 1) {
    return false;
  }

  let queue = [];

  const left = {
    "[" : "[",
    "{" : "{",
    "(" : "("
  };

  const right = {
    "]" : "[",
    "}" : "{",
    ")" : "("
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === left[s[i]]) {
      queue.push(s[i]);
    } else if (queue.pop() !== right[s[i]]) {
      return false;
    }
  }

  return (queue.length === 0) ? true : false;
}

console.log(isValid("{[()]}")); // true
console.log(isValid("{[(([{)]}")); // false
