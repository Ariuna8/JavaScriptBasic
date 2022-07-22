// 1 method
const testStr = "kayak";
const palindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrome(testStr));

// 2 method with reverse
const testStr1 = "kayak";
const palindrome1 = (str) => str === str.split("").reverse().join("");
console.log(palindrome(testStr1));

// 3 method with hash table
const checkPalindrome = (str) => {
  str = str.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++; // k = 2, a = 2
    }
  }
  // console.log(obj);
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 !== 0)
      count++;
    if (count > 1) return false;
  }
  return true;
};
let result = checkPalindrome(testStr1);
console.log(result);