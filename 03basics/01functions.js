// function sayMyName() {
//   console.log("H");
//   console.log("I");
//   console.log("T");
//   console.log("E");
//   console.log("S");
//   console.log("H");
// }

// function addTwoNum(num1 , num2){
//   console.log(num1+num2);
// }
// addTwoNum(2,3);

// function addTwoNum2(num1 , num2){
//   return num1+num2;
// }
// console.log(addTwoNum2(3,4));

// function loginUserMessage(username){
//   if(!username){
//     console.log("please enter the username first");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("Harsh"));
// console.log(loginUserMessage(""));

//------------ function with objects ------------------

// function calCartPrice(...num) {
//   let ans = 0;
//   for (let i = 0; i < num.length; i++) {
//     ans += num[i];
//   }
//   return ans;
// }

// console.log(calCartPrice(20,25,30,35)); // Output: 110

// const user = {
//   username: "hitesh",
//   price: 199
// };

// function handleObject(myobj){
//   console.log(`this course from ${myobj.username} and price is ${myobj.price}`);
// }

// handleObject(user);

//--------- function with array -------------

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(gerArray) {
  return gerArray[1];
}

console.log(returnSecondValue(myNewArray));
