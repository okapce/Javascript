const name = 'nick';

// function

const greet = () => 'hi';

let resultOne = greet();
console.log(resultOne);

// method
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks
const myFunc = (callBackFunc) => {
	let value = 50;
	callBackFunc(value);
};

myFunc(value => {
	console.log(value);
});

let people = ['mario', 'luigi', 'yoshi'];

const logPerson = (person, index) => {
	console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//people.forEach(person => {
//console.log(person);
//});