// From each order:
// 1. Print out the amount of Chocolate battered doughnuts the customer ordered
// Answer:  49, 12
// 2. Print the orderNumber if the order does not contain strawberry toppings
// Answer: orderNumber 420
const receipts = [
  {
    "orderNumber": 69,
    "name": "Yummy Cake",
    "Order": [
      {
        "id": 1001,
        "amount": 6,
        "batter": "Regular",
        "toppings": "Glazed"
      },
      {
        "id": 102,
        "amount": 12,
        "batter": "Chocolate",
        "toppings": "Strawberry"
      },
      {
        "id": 2003,
        "amount": 13,
        "batter": "Chocolate",
        "toppings": "Powdered Sugar"
      },
      {
        "id": 1403,
        "amount": 24,
        "batter": "Chocolate",
        "toppings": "Chocolate"
      },
      {
        "id": 103,
        "amount": 25,
        "batter": "Devil's Food",
        "toppings": "Powdered Sugar"
      }
    ]
  },
  {
    "orderNumber": 420,
    "name": "Much Doge",
    "Order": [
      {
        "id": 1001,
        "amount": 6,
        "batter": "Regular",
        "toppings": "Glazed"
      },
      {
        "id": 102,
        "amount": 12,
        "batter": "Chocolate",
        "toppings": "None"
      },
      {
        "id": 103,
        "amount": 25,
        "batter": "Devil's Food",
        "toppings": "Powdered Sugar"
      }
    ]
  }
]

//1. Print out the amount of Chocolate battered doughnuts the customer ordered
// Answer: 49, 12
let newArr = [];
for(let i = 0; i < arr.length; i++){
  let sum = 0;
  for(let j = 0; j < arr[i]["Order"].length; j++){
    if(arr[i]["Order"][j].batter === "Chocolate"){
      sum += arr[i]["Order"][j].amount
    }
  }
  newArr.push(sum)
}
console.log(newArr); // [49, 12]

function chocolate(receipts) {
  let a
  let b
  for (let i in receipts) {
    a = receipts[i].Order.filter(x => x.batter === 'Chocolate').map(x => x.amount).reduce((a, b) => a + b)
  }

  for (let i in receipts) {
    if ((receipts[i].Order.filter(x => x.toppings === 'Strawberry')).length === 0)
      b = receipts[i].orderNumber
  }
  return {a, b}
}
console.log(chocolate(receipts))