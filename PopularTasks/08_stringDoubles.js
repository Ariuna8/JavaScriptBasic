//In this Kata, you will write a function doubles
// that will remove double string characters that are adjacent to each other.

let s = 'abbcccdddda';
function doubles(s){
  let arr =['a',];
  for(let i=0;i<s.length;i++){
    if(arr[arr.length-1]!==s[i]) // sets it to the last element of arr
    {
      arr.push(s[i]);
      console.log(arr, `${i}`)
     } else {
      arr.pop()
    console.log(arr, `${i}`)
    }
  }
  return arr.join('')
}
console.log(doubles(s))