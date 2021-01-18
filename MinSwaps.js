/*https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays*/
function minimumSwaps(arr) {
  let boolArr = [];
  let len = arr.length;
  let mapArr = [];
  for (let i = 1; i < len + 1; i++) {
    boolArr.push(false);
    mapArr[i] = arr[i - 1];
  }
  let countSwap = 0;
  for (let i = 1; i < mapArr.length; i++) {
    let nextNode;
    if (boolArr[i] == false) {
      boolArr[i] = true;
      if (i == mapArr[i]) {
        continue;
      } else {
        let c = mapArr[i];
        while (!boolArr[c]) {
          boolArr[c] = true;
          nextNode = mapArr[c];
          c = nextNode;
          ++countSwap;
        }
      }
    }
  }
  return countSwap;
}
