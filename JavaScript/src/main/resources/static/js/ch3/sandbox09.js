// for loops
for(let i = 0; i<5; i++){

}

let names = ['mario', 'luigi', 'toad'];
for(let i = 0; i < names.length; i++){
	let html = `<div>${names}</div>`;
	console.log(html);
}

// while loop
let i = 0;
while( i < 5){
	console.log('in loop: ', i);
	i++;
}

// do while loop
do{
	console.log('value of i: ', i);
	i++;
}while( i < 7);
