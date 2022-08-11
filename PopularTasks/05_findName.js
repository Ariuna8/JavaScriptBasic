let test = 'My name is Ani'
function findName(str) {
  let arr = str.split(' ') // arr['My', 'name'..]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'Ani') return i
  }
}

console.log(findName(test))