const form = document.querySelector('.signup-form');
const username = document.querySelector('#username'); // # for inputs?

form.addEventListener('submit', event => {
	event.preventDefault();
	//console.log(username.value);
	console.log(form.username.value);
});