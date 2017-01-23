var canWinNim = function(n) {
    return !(n % 4) ? false : true;
};

console.log(canWinNim(1)); // true
console.log(canWinNim(2)); // true
console.log(canWinNim(3)); // true
console.log(canWinNim(4)); // false
console.log(canWinNim(5)); // true
console.log(canWinNim(6)); // true
console.log(canWinNim(7)); // true
console.log(canWinNim(8)); // false
