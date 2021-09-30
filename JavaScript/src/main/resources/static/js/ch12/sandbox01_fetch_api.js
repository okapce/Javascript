

const getData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
	
	//	.then((response) => {
	//	console.log('Resolved', response);	
	//		return response.json(); //returns a promise
	//	}).then((data) => {
	//		console.log(data);
	//	}).catch((err) => {
	//		console.log('Rejected', err);
	//	});
	
	if(response.status !== 200){
		throw new Error('Cannot fetch the data');
	}
	
	const data = await response.json();
	console.log(data);
	
	// return data; //returns as a promise

};

getData()
	.then(data => console.log('resolved:',data))
	.catch(err => console.log('rejected:', err.message));
