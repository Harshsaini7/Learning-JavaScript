const accountId = 753875;
let accountEmail = "harshsaini1812@gmail.com";
var accountPassword = 2345;
accountCity = "Jaipur";
let accountName;

// accountId = 2; // not allowed because of const variable

accountEmail = "jdhg12@gmail.com";
accountPassword = 477643;
accountCity = "Banglore";

console.log(accountId);

console.table([accountId , accountName , accountEmail , accountPassword , accountCity]);

//Important Things about variables
// In JavaScript , there are mainly 2 types of JavaScript
//1. Primitive   2. Non Primitive

//1.Primitive => {String , Number , Boolean , Null , Undefined , Symbol , BigInt}

//2. Non Primitive => {Arrays , Functions , Objects}

const ary = ["harsh" , "ravi" , "mukesh"];

let myObj = {
    myname : "harsh",
    myAge : 22
};

let myFun = function(){
    console.log("Hey I am Function");
}

myFun();