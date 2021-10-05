const character = [
	{name: 'mario', age: '50'},
	{name: 'luigi', age: '30'},
	{name: 'peach', age: '40'}
];

localStorage.setItem('character', JSON.stringify(character));

const stored = localStorage.getItem('character');

console.log(JSON.parse(stored));
