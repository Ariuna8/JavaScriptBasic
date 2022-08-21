let str = 'superb'
function wordsToMarks(string){
  let res = 0;
  for (let i of string) {
    res += '0abcdefghijklmnopqrstuvwxyz'.indexOf(i);
  }
  return res;
}

console.log(wordsToMarks(str))