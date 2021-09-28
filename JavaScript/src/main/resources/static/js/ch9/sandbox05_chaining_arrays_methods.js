const scores = [
	{player: 'mario', score: 50},
	{player: 'peach', score: 5},
	{player: 'luigi', score: 40},
	{player: 'yoshi', score: 30},
	{player: 'toad', score: 10}
];
//const filtered = scores.filter(character => character.score > 20);

//const result = filtered.map(character => {
//	return `the player ${character.player} has a power of ${character.score} points`;
//});

const result = scores.filter(character => character.score > 20)
					 .map(character => `the player ${character.player} has a power of ${character.score} points`);

console.log(result);