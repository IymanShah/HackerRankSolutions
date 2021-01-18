/*https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays*/
function arrayManipulation(n, queries) {
  let arr = new Array(n + 1).fill(0);
  for (let i = 0; i < queries.length; i++) {
    let j = 0;
    let x = queries[i][j];
    let y = queries[i][j + 1];
    let val = queries[i][j + 2];
    arr[x - 1] += val;
    arr[y] -= val;
  }
  let sum = 0;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < n + 1; i++) {
    sum += arr[i];
    arr[i] = sum;
    max = Math.max(max, arr[i]);
  }
  return max;
}

function arrayManipulation2(n, queries) {
  let diffs = new Array(n + 1).fill(0);

  queries.forEach((query) => {
    const [range_start, range_end, addend] = query;

    diffs[range_start - 1] += addend;

    diffs[range_end] -= addend;
  });

  return diffs.reduce(
    (acc, cur) => {
      return {
        running_total: acc.running_total + cur,
        max: Math.max(acc.max, acc.running_total + cur),
      };
    },
    { running_total: 0, max: 0 }
  ).max;
}
