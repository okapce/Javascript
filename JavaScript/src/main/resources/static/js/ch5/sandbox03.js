// Math object

let userOne = { name : 'ted', age: 50};
let userTwo = userOne;

console.log(userOne, userTwo);
userOne.age= 70;
console.log(userTwo); //usertwo points at reference of userOne, so a change to the pointer reflects on both.
