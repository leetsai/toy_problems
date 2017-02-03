var countBinary = function(str) {
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 2; j <= str.length; j+=2) {
      const arr = str.slice(i, j);
      const mid = arr.length / 2;
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      const leftSet = new Set(left);
      const rightSet = new Set(right);

      if (left !== right && leftSet.size === 1 && rightSet.size === 1) {
        ans++;
      }
    }
  }
  return ans;
};
