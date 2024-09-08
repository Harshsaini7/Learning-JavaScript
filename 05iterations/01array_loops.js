// for...of loop
//common scenarios
//strings in array ["","",""]
//Objects in array [{},{},{}]

//for..of loop on arrays
// const numbers = [1,2,3,4,5];

// for (const num of numbers) {
//     console.log(num);
// }

//for...of loop on strings
// const name = "Harsh Saini";

// for (const char of name) {
//     console.log(char);
// }


//for..of for Maps
// const myMap = new Map();

// myMap.set('IN','India');
// myMap.set('US','United States');
// myMap.set('UK','United Kingdom');

// for (const [key,value] of myMap) {
//     console.log(`${key} :- ${value}`);
// }

// console.log(myMap);

//for...of on objects : Not possible to iterate the object using for..of
const myObject = {
    "game1" : "cricket",
    "game2" : "football"
}

for (const iterator of myObject) {
    console.log(`${it.first}`);
}

