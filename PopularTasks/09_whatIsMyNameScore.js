let alpha = {'ABCDE':1, 'FGHIJ':2, 'KLMNO':3, 'PQRST':4, 'UVWXY':5}
let name = 'Mary Jane'
function nameScore(name, alpha){
  let s = name.toUpperCase()
  let sum = 0;
  for(let i in s) {
    for(let key in alpha) {
      if(key.indexOf(s[i]) > -1)
        sum+=alpha[key]
    }
  } return {[name]: sum}
}

console.log(nameScore(name, alpha))