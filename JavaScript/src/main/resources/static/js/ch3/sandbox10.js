// if statements & logical operators (&& ||)
const age =35;

if(age>20){
	console.log(`you are ${age} years old`);
} 

const nintendo = ['mario', 'luigi', 'yoshi'];

if(nintendo.length>2){
	console.log(`there are ${nintendo.length} characters`);
}

const pass = 'password.1245';
if (pass.length >= 12 && pass.includes('.')){
	console.log("password is longer than 12 chars");
}else if (pass.length >= 8){
	console.log("password is longer than 8 chars");
}else{
	console.log("password is too short");
}
