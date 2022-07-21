// __proto__ point on prototype
// Object.getPrototypeOf()

function Cat(name, color){
  this.name = name
  this.color = color
}
Cat.prototype.voice = function (){
  console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat('Tom', 'white')

console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
cat.voice


//===========
function Person(){}
Person.prototype.legs = 2
Person.prototype.skin = 'good'

const person = new Person()
person.name = 'Via'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)
console.log(person.hasOwnProperty('name')) //true
console.log(person.hasOwnProperty('skin')) //false

// Object.create()
const proto = {year:2019}
const myYear = Object.create(proto)

proto.year = 2400
console.log(myYear.year)

console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto) // true






























