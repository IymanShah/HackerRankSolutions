/*
hello
world
hi
world
output: YES
*/

function twoStrings(s1, s2) {
  let hash = {};
  let retStr = "NO";
  for (let s of s1) {
    hash[s] = (hash[s] || 0) + 1;
  }
  for (let s of s2) {
    if (hash[s]) {
      retStr = "YES";
      break;
    }
  }
  return retStr;
}
