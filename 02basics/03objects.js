const mySym = Symbol("key1");

const jsUser = {
  name : "Harsh",
  "full name" : "Harsh Saini",
  [mySym] : "mykey1",
  age : 22,
  location : "Saharanpur",
  email : "harshsaini1812@gmail.com",
  isLoggedIn : false,
  lastLoggedIn : ["Monday","Tuesday"]
}

// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "hk3876@gmail.com";
// console.log(jsUser);
// Object.freeze(jsUser);
// jsUser.email = "hahah@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello from Js User");
}

jsUser.greetingTwo = function(){
  console.log(`Hello Js user from ${this["full name"]}`);
}

jsUser.greeting();
jsUser.greetingTwo();
console.log(jsUser.greeting);