// Represent a number in any base

function getBase(number, base) {
  var newN = "";
  while (number !== 0) {
    var remainder = number % base;
    newN += remainder;
    number = Math.floor(number / base);
  }

  return findLongestZero(newN.split("").reverse().join(""));
}

function findLongestZero(str) {
  var longestGap = 0;
  var currentRun = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      currentRun++;
      if (currentRun > longestGap) {
        longestGap = currentRun;
      }
    } else {
      currentRun = 0;
    }
  }
  return longestGap;
}

getBase(10, 2); // 1
getBase(11, 8); // 0
getBase(33, 2); // 4
