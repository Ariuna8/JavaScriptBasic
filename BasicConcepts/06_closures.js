// //замыкание - момент когда функция имеет доступ к переменным из вышестоящего скопа
// function sayHelloTo(name){
//   const message = 'Hello ' + name
//
//   return function(){
//     console.log(message)
//   }
// }
//
// const helloToElena = sayHelloTo('Elena')
// const helloToIgor = sayHelloTo('Igor')
// console.log(helloToElena)
// console.log(helloToIgor)
// helloToElena()
// helloToIgor()
//
// function createFrameworkManager(){
//   const fw = ['an', 're']
//
//   return {
//     print: function (){
//       console.log(fw)
//     },
//     add: function (framework){
//       fw.push(framework)
//     }
//   }
// }
//
// const manager = createFrameworkManager()
// console.log(manager)
// manager.print()
// manager.add('view')
// manager.print()


//setTimeOut
// const fib = [1,2,3,5,8,13]
// for(var i = 0; i < fib.length; i++){
//   setTimeout(function (){
//     console.log(`fib[${i}] = ${fib[i]}`)
//   }, 1500)
// }

const fib = [1,2,3,5,8,13]
for(var i = 0; i < fib.length; i++){
  (function(j){
    setTimeout(function (){
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1500)
  })(i)
}
