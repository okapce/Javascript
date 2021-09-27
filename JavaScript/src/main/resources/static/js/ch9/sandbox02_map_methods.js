// FILTER METHOD
const score = [10, 30, 15, 25, 50, 40, 5];

const products = [
	{name: 'Banana', price: 28},
	{name: 'Apple', price: 22},
	{name: 'Orange', price: 20},
	{name: 'Grape', price: 10},
	{name: 'Avocado', price: 50},
];

const saleProduct = products.map((product) => {
	if(product.price > 22){
		return {name: product.name, price: product.price/2};
	}else{
		return product;
	}
}); 

console.log(saleProduct);