console.log(1);
console.log(2);

setTimeout(() => {
	console.log('callback function fired');
}, 2000); //waits 2 seconds

console.log(3);
console.log(4);
//const getTodos = (callback) => {
	const req = new XMLHttpRequest();

	req.addEventListener('readystatechange', () => {
		if(req.readyState === 4 && req.status === 200){
			console.log(req, req.responseText);
		}else if(req.readyState === 4){
			console.log('could not fetch the request');
		}
	});
	req.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
	req.send();
//});