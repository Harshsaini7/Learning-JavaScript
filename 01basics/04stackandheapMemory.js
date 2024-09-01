//In JS mainly 2 types of memory allocation occurs
//1. Stack memory alloocation  2. Heap Memory Allocation

// all Primitive datatypes allocate memory in Stack => pass by value(copy)
//all Non Primitive datatypes allocate memory in Heap => pass by reference(actual address)

//examples

let myname = "harsh";
console.log(myname);

let nowName = myname;
nowName = "Ravi";

console.log(nowName);

let myObj = {
    accountId : 88654,
    accountPass : "unlock"
};

let newObj = myObj;

newObj.accountPass = "lock";

console.log(myObj.accountPass);
console.log(newObj.accountPass);




