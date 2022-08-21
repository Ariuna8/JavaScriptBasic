//In this Kata, you will write a function doubles
// that will remove double string characters that are adjacent to each other.
let string = 'abbcccdddda'
function removeDuplicate(x){
  let a = x.split('');
  let x2 = [];
  for (let i in a)
    if(x2.indexOf(a[i]) === -1) x2.push(a[i])
  return  x2.join('');
}

console.log(removeDuplicate(string))
//removing duplicates in array
const arrr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
const nonDuplicatesarr = arrr.filter(el => arrr.indexOf(el) === arrr.lastIndexOf(el));
console.log(nonDuplicatesarr)
/////////
let str = 'hello world'
const arr = str.split('')
const nonDuplicatesStr = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
console.log(nonDuplicatesStr.join(''))