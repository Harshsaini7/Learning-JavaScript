// let a = 300;

// if(true){
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log("Inner ",a);
// }
// // console.log(b);//scoped variable
// console.log(c);
// console.log(a);

//-------------- Scope level and mini hoisting ----------------

//Scope using functions
// function one() {
//   const username = "Harsh";

//   function two(){
//     const website = "Youtube";
//     console.log("Inner ",username);
//   }
//   // console.log(website);
//   two();
// }

// one();

// Scope using if statements
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "   youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//---------------- Intresting ------------------
console.log(addOne(5));

function addOne(num){
  return num+1;
}

// console.log(addTwo(4));

const addTwo = function(num){
  return num + 2;
}

console.log(addTwo(5));