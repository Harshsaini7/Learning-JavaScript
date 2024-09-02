//think you are asking user to register, so creating an user object

// const user = {
//   username : "Harsh Saini",
//   price : 999,
//   welcomMsg : function(){
//     console.log(`${this.username} Welcome to this website`);
//     // console.log(this);
//   }
// };

// user.welcomMsg();
// user["username"] = "Ravi";
// user.welcomMsg();

// console.log(this);

//Not able to access this keyword in normal function

// function chai(){
//   const username = "Harsh";
//   console.log(this.username);
// }
// chai();

// Arrow function

// const chai = () => {
//   const username = "Harsh";
//   console.log(this.username);
// }
// chai();

// arrow function with return, or explicitly return

// const addTwo = (num1 , num2) => {
//   return num1+num2;
// }

// console.log(addTwo(3,4));

// arrow function with implicit return
const addTwo = (num1 , num2) => (num1 + num2);
console.log(addTwo(3,4));

// arrow function with object return using implicit return
const myfun = () => ({username : "Harsh saini"});

console.log(myfun());