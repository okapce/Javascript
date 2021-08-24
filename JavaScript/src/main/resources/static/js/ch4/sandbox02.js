// args & params

const speak = function(name){
	console.log(`good day, ${name}!`);
};

speak('mario');

// returning values

const calcArea = function(radius){
	let area = 3.14 * radius**2;
	return area;
};

const area = calcArea(5);
console.log(`Area of 5 cm is ${area}`);