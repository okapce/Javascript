// FILTER METHOD
const score = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = score.filter((score) => {
	return score > 20;
});

console.log(filteredScores);

const users = [
	{name: 'mario', premium: true},
	{name: 'luigi', premium: false},
	{name: 'wario', premium: true},
	{name: 'bowser', premium: false}
];
const premiumUsers = users.filter((user) => {
	return user.premium;
});

console.log(premiumUsers);