const name = "Harsh0";
const repoCnt = 7;

// console.log(name + repoCnt + " Value");

// console.log(`Hello my name is ${name} and i have ${repoCnt} repos`);

const gameName = new String("HarshSaini");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('z'));

const newString = gameName.substring(0 , 5);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const nowString = "    Harry   ";
console.log(nowString);
console.log(nowString.trim());

const url = "https://hitesh.com/hitesh%20chodhary";
console.log(url.replace("%20","-"));

console.log(url.includes("hitesh"));

const myString = "harsh-saini-07";
console.log(myString.split("-"));








