//Immediate Invoked Function Expression(IIFE) -
// let result = []
// for(var i = 0; i < 5; i++){
//   result.push(function() {
//     console.log(i)
//   })
// }
//
// result[2]() // 5 - why? because of using var which eq = 5
// result[4]() // 5

let result = []
for(var i = 0; i < 5; i++){
  ( function (){
    var j = i
    result.push(function (){console.log(j)} )
  })()
}

result[2]() // 2 why? because we copied i and working with its copy
result[4]() // 4
