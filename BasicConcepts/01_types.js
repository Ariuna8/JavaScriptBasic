//null,undefined, boolean, number, string, object(non-primit), symbol
console.log(typeof 0)  // number
console.log(typeof true) // boolean
console.log(typeof 'JS')  // string
console.log(typeof undefined) // undefined
console.log(typeof Math) //object
console.log(typeof Symbol('JS')) // symbol
console.log(typeof null) // typeof null actually, not object
console.log(typeof NaN) // number
//============================
console.log(Boolean('')) // false
console.log(Boolean('Hello')) // true
console.log(Boolean(' ')) // true
console.log(Boolean('0')) // true
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(function (){})) // true
//==============================
console.log(1 + '2')        // '12'
console.log('' + 1 + 0)     // '10'
console.log('' - 1 + 0)     // -1   '-'is not used for concat string => '' => as number 0
console.log('3' * '8')      // 24
console.log(4 + 10 + 'px')  // '14px'
console.log('px' + 5 + 10)  // 'px510'
console.log('42' - 40)      //  2
console.log('42px' - 2)     // NaN
console.log(null + 2)       // 2   null to number => 0
console.log(undefined + 42) // NaN
// ========== VS ==============
console.log(2 == '2')  //true
console.log(2 === '2') //false
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log('0' == false) // true
console.log('0' == 0) // true
console.log(0 == 0) // true
//==============================
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false
console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false
console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null) //false

// Difference between null and undefined?
// null - no any value in variable
// undefined - used when variable wasn't declared or variable declared without value