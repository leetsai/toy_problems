// Represent a number 'N' in binary

function getBinary(N) {
  var binary = "";
  var divideThis = 2;
  while (N !== 0) {
    var remainder = N % divideThis;
    binary += remainder;
    N = Math.floor(N / divideThis);
  }
  return binary.split("").reverse().join("");
}

getBinary(10); // 1010
getBinary(33); // 100001
