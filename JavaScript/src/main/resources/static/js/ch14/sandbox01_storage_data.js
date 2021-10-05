window.localStorage.setItem('name', 'mario');
window.localStorage.setItem('age', '50');


let name = localStorage.getItem('name');
console.log(name);

localStorage.setItem('name', 'luigi');

name = localStorage.getItem('name');
console.log(name);


localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);

//remove all
localStorage.clear();

name= localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);