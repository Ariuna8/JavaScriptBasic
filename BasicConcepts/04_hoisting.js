function sum(a,b) {
  return a + b
}
console.log(sum(1,41)) // 42 even if we put console.log up, before function
//===============================
var i
console.log(i)  // undefined
i = 42
console.log(i)  // 42
//================================
// let and const are not hoisting
console.log(num)  // undefined
var num = 42
console.log(num)  // 42
//================================
console.log(num) //referenceError
const num = 42
console.log(num)
//===============================
console.log(num) //referenceError
let num = 42
console.log(num) //42

//Function Expression & Function Declaration
//function declaration, we can call function anywhere
console.log(square(25)) //625
function square(num){
  return num ** 2
}

//function expression, we can call function after its defined
console.log(square(25)) // referenceError(square is not a function)
const square = function (num){
  return num ** 2
}
//==============================
const square = function (num){
  return num ** 2
}
console.log(square(25)) // 625
