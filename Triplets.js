/*https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps*/

function countTriplets(arr, r) {
  let len = arr.length;
  let count = 0;
  let rightHash = {};
  let leftHash = {};
  for (let i = 0; i < len; i++) {
    if (rightHash[arr[i]]) {
      rightHash[arr[i]]++;
    } else {
      rightHash[arr[i]] = 1;
    }
  }

  for (let i = 0; i < len; i++) {
    let elem = arr[i] / r;
    rightHash[arr[i]]--;
    if (leftHash[elem]) {
      let leftCount = leftHash[elem];
      let mul = arr[i] * r;
      if (rightHash[mul]) {
        let rightCount = rightHash[mul];
        count += leftCount * rightCount;
      }
    }
    if (leftHash[arr[i]]) {
      leftHash[arr[i]]++;
    } else {
      leftHash[arr[i]] = 1;
    }
  }
  return count;
}
