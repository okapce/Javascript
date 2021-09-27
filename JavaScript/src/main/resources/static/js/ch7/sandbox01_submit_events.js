const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username'); // # for inputs?

form.addEventListener('submit', event => {
	event.preventDefault();
	//console.log(username.value);
	console.log(form.username.value);
});

// testing RegEx
const username = 'tobiasmuller';
const pattern = /[a-z]{6,10}/;
let result = pattern.test(username);

if(result){
	console.log('regEx test passed');
}else{
	console.log('RegEx test failed');
}
