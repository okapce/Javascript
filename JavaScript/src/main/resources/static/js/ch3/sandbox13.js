// vars & block scope
let age = 35;

if(true){
	let age = 40;
	console.log("inside block", age);
}
console.log("outside block", age);

//let and const work at block code lvl, vars is function scoped.