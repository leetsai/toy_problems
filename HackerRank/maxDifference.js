var maxDifference = function(arr) {
  let difference = -1;
  let left = 0;
  let right = arr.length - 1;
  let largestSeen;
  let smallestSeen;

  while (left <= right) {
    if (largestSeen < arr[right] || !largestSeen) {
      largestSeen = arr[right];
      right--;
    } else if (largestSeen >= arr[right] && smallestSeen < arr[right]) {
      right--;
    }

    if (smallestSeen > arr[left] || !smallestSeen) {
      smallestSeen = arr[left];
      left++;
    } else if (smallestSeen <= arr[left] && largestSeen > arr[left]) {
      left++;
    }

    difference = Math.max(largestSeen - smallestSeen, difference);
  }

  console.log('largest: ', largestSeen, 'smallest: ', smallestSeen);

  return smallestSeen === largestSeen ? -1 : difference;
};
