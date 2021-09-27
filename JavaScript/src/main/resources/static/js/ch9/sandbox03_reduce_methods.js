// REDUCE METHOD
const score = [10, 30, 15, 25, 50, 40, 5];

const result = score.reduce((accumulator, current) => {
	if(current > 30){
		accumulator++;
	}
	return accumulator;
}, 0);

console.log(result);

const scores = [
	{player: 'mario', score: 50},
	{player: 'luigi', score: 50},
	{player: 'yoshi', score: 50},
	{player: 'toad', score: 50},
	{player: 'peach', score: 50},
];

const marioTotal = scores.reduce((acc, curr) => {
	if(curr.player === 'mario'){
		acc += curr.score;
	}
	return acc;
});

console.log(marioTotal);