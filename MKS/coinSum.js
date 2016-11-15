// In England the currency is made up of pound, £, and pence, p, and there are
// eight coins in general circulation:
  // 1p
  // 2p
  // 5p
  // 10p
  // 20p
  // 50p
  // £1 (100p)
  // £2 (200p)

// Given a given number of pence, return the possible number of ways someone
// could make change.

// It is possible to make 5 pence in the following ways:
  // 5 * 1p
  // 3 * 1p + 1 * 2p
  // 1 * 1p + 2 * 2p
  // 1 * 5p

// In other words, find all the possible combinations of coins that sum to a
// given pence value.


function coinSums (total) {
  var coins = [1,2,5,10,20,50,100,200];
  var count = 0;

  var helper = function(index, valueLeft) {
    var currentCoin = coins[index];

    if (index === 0 && (valueLeft % currentCoin === 0)) {
      count++;
      return;
    }

    while (valueLeft >= 0) {
      // call helper with the new index and the total value still needed
      // this goes deep into 1p before it does anything else
      helper(index - 1, valueLeft);
      // reduce the total value still needed by the value of the coin popped
      valueLeft -= currentCoin;
    }
  };

  helper(coins.length - 1, total);
  return count;
}

coinSums(1); // 1
coinSums(17); // 28
