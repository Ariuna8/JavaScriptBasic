const fibonacci = (index) => {
  const arr = [0, 1, 1, 2, 3, 5]; //1, 2

  for (let i = 2; i <= index; i++) {
    let newElement = arr[i - 2] + arr[i - 1];
    arr.push(newElement);
  }
  return arr[arr.length - 1];
};
console.log(fibonacci(5)); // calculate the last element in array with in 7