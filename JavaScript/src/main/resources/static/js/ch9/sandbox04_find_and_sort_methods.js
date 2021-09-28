// FIND METHOD
const score = [10, 30, 15, 25, 40, 50, 5];

const firstHighScore = score.find((score) => {
	return score > 30;
});

console.log(firstHighScore);

// SORT METHOD
const names = ['toby', 'fred', 'daniel', 'rob', 'josh'];

names.reverse();
console.log(names);

names.sort();
console.log(names);

const scores = [
	{player: 'mario', score: 50},
	{player: 'peach', score: 5},
	{player: 'luigi', score: 40},
	{player: 'yoshi', score: 30},
	{player: 'toad', score: 10}
];

scores.sort((a,b) => {
	if(a.score > b.score){
		return -1;
	}else if(a.score < b.score){
		return 1;
	}else{
		return 0;
	}
});

scores.sort((a,b) => b.score - a.score);

console.log(scores);