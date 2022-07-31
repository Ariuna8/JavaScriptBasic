const testNumber = [1, 3, 4, 5, 0, 6, 7, 8, 6, 9, 12, 15, 20, 34, 45];

const fittBuzz1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("New iterration. Current element is ", arr[i]);
    if (arr[i] % 15 === 0) {
      console.log("FizzBuzz");
    } else if (arr[i] % 3 === 0) {
      console.log("fizz");
    } else if (arr[i] % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(arr[i]);
    }
  }
};
res = fittBuzz1(testNumber);
console.log(res);