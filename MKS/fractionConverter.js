// Write a function that takes a number as its argument and returns a string
// that represents that number’s simplified fraction.

// Whole numbers and mixed fractions should be returned as improper fractions.

function fractionConverter (num) {
  let decimalPlaces = (num.toString().split('.')[1] || []).length;
  let negative = num < 0 ? true: false;
  let top = Math.abs(Number.parseInt(num * Math.pow(10, decimalPlaces)));
  let bottom = Number.parseInt(1 * Math.pow(10, decimalPlaces));
  let cap = Math.min(top, bottom);

  for (let i = 2; i <= cap; i++) {
    if (top % i === 0 && bottom % i === 0) {
      top /= i;
      bottom /= i;
      cap = Math.min(top, bottom);
      i--;
    }
  }

  return negative ? -top + "/" + bottom : top + "/" + bottom;
}

console.log(fractionConverter(0.5));	// "1/2"
console.log(fractionConverter(3));	// "3/1"
console.log(fractionConverter(2.5));	// "5/2"
console.log(fractionConverter(2.75));	// "11/4"
