const myNum = [1, 2, 3];

//reduce using normal function
const newNum = myNum.reduce(function (acc , val) {
    console.log(`acc is ${acc} and val is ${val}`);
    return acc + val;
},0);

console.log(newNum);

//reduce using arrow function
const newNums = myNum.reduce((acc , val) => {
    console.log(`acc is ${acc} and val is ${val}`);
    return acc + val;
},5);

console.log(newNums);

//other example
const shoppingCart = [
    {
      itemName: "js course",
      price: 2999
    },
    {
      itemName: "py course",
      price: 999
    },
    {
      itemName: "mobile dev course",
      price: 5999
    },
    {
      itemName: "data science course",
      price: 12999
    }
  ];

  //scenario: add the price in the shopping card
  const totalPrice = shoppingCart.reduce((acc , currVal) => (acc + currVal["price"]),0);

  console.log(totalPrice);