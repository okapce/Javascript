const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
	console.log("this is a copy of copy-me");
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', event => {
	console.log(event.offsetX, event.offsetY);
	box.textContent = `x pos -${event.offsetX} y pos - ${event.offsetY}`
});

document.addEventListener('wheel', event => {
	console.log(event);
});
