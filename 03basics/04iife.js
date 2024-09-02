// Immediately Invoked Function Expression (IIFE)

// Normal function defination and function call
/*
function chai(){
    console.log(`DB Connected`);
}

chai();
*/

// IIFE: using normal function or called named IIFE
(function(){
  console.log(`DB Connected`);
})();

//IIFE: using arrow function
(() => {
  console.log(`DB Connected Again`);
})();

//IIFE with argument
((username) => {
  console.log(`${username} DB connected`);
})('mongoDB');
