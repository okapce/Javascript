const button = document.querySelector('button');
const ul = document.querySelector('ul');
// ADDS ELEMENT ON CLICK BUTTON EVENT
button.addEventListener('click', () => {
	const li = document.createElement('li');
	li.textContent = 'something new to do';
	ul.prepend(li); //sends to top of parent
});

ul.addEventListener('click', event => {
	event.target.remove();
});