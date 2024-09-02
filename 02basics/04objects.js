const tinderUser = {};
tinderUser["id"] = "123";
tinderUser["name"] = "Harsh";
tinderUser["isLoggedIn"] = false;

// console.log(tinderUser);

// const regularUser = {
//   email: "some@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "Hitesh",
//       lastname: "Chaudhary"
//     }
//   }
// };

// console.log(regularUser["fullname"]?.["userfullname"]?.["firstname"]);
// console.log(regularUser["fullname"]?.["userfullname"]?.["lastname"]);

//Combining 2 objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "hitesh"
};

const {courseInstructor} = course;
console.log(courseInstructor);

const {coursename : name} = course;
console.log(name);