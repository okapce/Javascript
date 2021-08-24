// regular function
//const calcArea = function(radius){
//	let area = 3.14 * radius**2;
//	return area;
//};

// arrow function
//const calcArea = (radius) => {
//	return 3.14 * radius **2;
//};


const calcArea = (radius) => 3.14 * radius **2;

const area = calcArea(5);
console.log("area is: ", area);

//no params in arrow funct
const greet = () => "hello there";
const result = greet();
console.log(`${result}`);

const bill = (products, tax) => {
					let total =0; 
					for(let i =0; i<products.length; i++){
						total += products[i] + products[i]*tax;
						}
						return total;
					}; 
					
console.log(bill([100, 50, 10], 0.19));