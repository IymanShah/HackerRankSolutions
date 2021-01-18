/*https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps*/

function sherlockAndAnagrams(s) {
  let res = [];
  let count = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
      res.push(s.slice(i, j).split("").sort().join(""));
    }
  }
  let lenRes = res.length;
  for (let i = 0; i < lenRes; i++) {
    for (let j = i + 1; j < lenRes; j++) {
      if (res[i] == res[j]) {
        count++;
      }
    }
  }
  return count;
}
