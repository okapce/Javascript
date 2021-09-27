const button = document.querySelector('button');

const ul = document.querySelector('ul');
//ul.remove();

//button.addEventListener('click', () => {
//	console.log('you clicked me!');
//});

button.addEventListener('click', () => {
	//ul.innerHTML += '<li>new todo</li>';
	const li = document.createElement('li');
	li.textContent = 'something new to do';
	//ul.append(li); // sends to bottom of parent
	ul.prepend(li); //sends to top of parent
});



const items = document.querySelectorAll('li');

items.forEach(item => {
	item.addEventListener('click', event => {
		//console.log('item clicked');
		//console.log(event.target);
		event.target.style.textDecoration = 'line-through';
		//event.target.remove();
	});
});