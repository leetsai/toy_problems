// Suppose a newly-born pair of iguanas, one male, one female, are put in a
// large aquarium.

// Iguanas are able to mate at the age of one month so that at the end of its
// second month a female can produce another pair of iguanas.

// Suppose that our iguanas never die and that the female always produces one
// new pair (one male, one female) every month from the second month on.

// How many pairs of iguanas will there be after n months?

// For example, the iguana pair size for months zero through five are:
// 0 1 1 2 3 5

// If n were 4, your function should return 3; for 5, it should return 5.

// HINT: This iguana pattern is described exactly by the fibonacci sequence:

// Write a function that accepts a number n and returns the number of iguana
// pairs after n months.

// DO NOT use a recursive solution to this problem. Your solution must run in
// linear time.

var nthFibonacci = function(n) {
  var arr = [0, 1];
  var previousNumber = 0;
  var currentNumber = 1;
  var count = 1;

  if (n < 0) {
    return null;
  } else if (n <= 1) {
    return arr[n];
  }

  while (count !== n) {
    var temp = currentNumber;
    currentNumber += previousNumber;
    previousNumber = temp;
    count++;
  }

  return currentNumber;
};

nthFibonacci(10); // 55
