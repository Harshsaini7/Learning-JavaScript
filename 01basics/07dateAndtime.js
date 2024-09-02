let mydate = new Date();

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());

// console.log(typeof mydate);

// let myCreatedDate = new Date("02-09-2024");
// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

console.log(
    newDate.toLocaleString("default", {
      weekday : "short"
    })
);
