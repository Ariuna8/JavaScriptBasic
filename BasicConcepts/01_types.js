console.log(1+'2')          // '12'
console.log('' + 1 + 0)     // '10'
console.log('' - 1 + 0)     // -1
console.log('3' * '8')      // 24
console.log('px' + 5 + 10)  // 'px510'
console.log('42' - 40)      //  2
console.log('42px' - 2)     // NaN
console.log(null + 2)       // 2
console.log(undefined + 42) // NaN

// ========== VS ==============
console.log(2 == '2')  //true
console.log(2 === '2') //false
console.log(undefined == false) //false
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