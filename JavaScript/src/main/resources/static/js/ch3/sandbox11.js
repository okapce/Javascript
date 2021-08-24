// NOT (!)
let user = false;

if(!user){
	console.log('user must me online');
}

// break and continue
const scores = [50, 25, 0, 25, 100, 20, 10];

for(let i=0; i < scores.length; i++){
	console.log(`your score is ${scores[i]} points`);
	if(scores[i] === 0){
		console.log("who put that there!?");
		continue;
	}
	
	if(scores[i] === 100){
		console.log(`your best score is ${scores[i]} points, you're the winner, nevermind the rest`);
		break;
	}
	
}
