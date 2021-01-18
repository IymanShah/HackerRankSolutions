/* Example Inpt:
6 4
give me one grand today night
give one grand today
Example otpt:
Yes
*/
function checkMagazine(magazine, note) {
  let hash = {};
  let retStr = "Yes";
  magazine.forEach((word) => (hash[word] = (hash[word] || 0) + 1));
  note.forEach((word) => (hash[word] = (hash[word] || 0) - 1));
  for (const i in hash) {
    if (hash[i] < 0) {
      retStr = "No";
      break;
    }
  }
  console.log(retStr);
}
