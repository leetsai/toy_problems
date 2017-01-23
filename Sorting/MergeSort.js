function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(a, b) {
  var results = [];

  while (a.length && b.length) {
    if (a[0] < b[0]) {
      results.push(a.shift());
    } else {
      results.push(b.shift());
    }
  }

  while (a.length) {
    results.push(a.shift());
  }

  while (b.length) {
    results.push(b.shift());
  }

  return results;
}

console.log(mergeSort([5,4,3,2,1])); // [ 1, 2, 3, 4, 5 ]
// time complexity: O(n * log(n));
// the division of arrays can be thought of as a binary tree, hence log(n)
// at each level of the tree, the cost of merge is 2n, which reduces to O(n)
// thus, the total cost is O(n * log(n));
