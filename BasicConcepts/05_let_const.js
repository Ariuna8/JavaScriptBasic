// let=======================
let a = 'Variable a'
let b = 'Variable b'

{
  a = 'New variable A'
  let b = 'Local Variable B'
  console.log('scope A', a) // scope A New variable A
  console.log('scope B', b) // scope B Local Variable B
}
console.log('A:', a) // A: New variable A
console.log('B:', b) // B: Variable b

//const=======================
const PORT = 8080
PORT = 2000 // error assignment

//============================
const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
array[0] = 'js'
console.log(array) //[ 'js', 'is', 'Awesome', '!' ]
//============================
const obj = {}
obj.name = 'Via'
obj.age = 26

console.log(obj)  // { name: 'Via', age: 26 }

delete obj.name

console.log(obj)  // { age: 26 }

