//Scenario: suppose u need an email from DB and need to print the email if email exists

// const userEmail = "h@hitesh.ai";
const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

//------------------------ falsy values ---------------------
// false, 0, -0, BigIn 0n, "", null, undefined, NaN other all values are truthy values

//------------------------ truthy values ---------------------
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

// checking empty object
const emptyObj = {};
if(Object.keys(emptyObj).length == 0){
  console.log("Object is Empty");
}

//------------------------ Nullish Coalescing Operator ?? ---------------------
let val1;
val1 = null ?? 10 ?? 20;

console.log(val1);

//------------------------ Ternary operator (condition) ? true : false ---------------------
let score = 101;

(score > 100) ? (console.log("Century")) : (console.log("Below Century"));

