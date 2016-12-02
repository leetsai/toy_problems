// Represent a number in any base

function getBase(number, base) {
  var newN = "";
  while (number !== 0) {
    var remainder = number % base;
    newN += remainder;
    number = Math.floor(number / base);
  }
  return newN.split("").reverse().join("");
}

getBase(10, 2); // 1010
getBase(11, 8); // 13
getBase(33, 11); // 30
