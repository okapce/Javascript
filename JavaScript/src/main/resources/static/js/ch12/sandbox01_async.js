const getTodos = (resource) => {
	
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();

		req.addEventListener('readystatechange', () => {
			if(req.readyState === 4 && req.status === 200){
				const data = JSON.parse(req.responseText);
				//callback(undefined, data);	
				resolve(data);
			} else if(req.readyState === 4){
				//callback('Could not fetch data', undefined);
				reject('error getting resource');
		}
	});
	
	req.open('GET', resource);
	req.send();
	});
	
	
};

console.log(1);
console.log(2);

//setTimeout(() => {
//	console.log('callback function fired');
//}, 2000); //waits 2 seconds

//getData = () => {
//	return new Promise((resolve, reject) => {
		//resolve('some data');
//		reject('some error');
//	});
//}

//getData().then((data) => {
//	console.log(data);
//}, (err) => { //second method
//	console.log(err);
//});

getTodos('https://jsonplaceholder.typicode.com/todos/')
	.then((data) => {
		console.log('promise resolved', data);
	}).catch((err) => { 
		console.log('promise rejected', err);
	});

console.log(3);
console.log(4);