// const marvel_heros = ["thor", "Ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1])

// const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);
// console.log(all_new_heros[3]);

const anotherArray = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};  
console.log(Array.isArray("harsh"));
console.log(Array.from("harsh"));
console.log(Object.keys(person));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));