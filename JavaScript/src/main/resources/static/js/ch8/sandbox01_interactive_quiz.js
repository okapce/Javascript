const correctAnswers = ['a2', 'a2', 'a2'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', event => {
	event.preventDefault(); // prevents auto refresh
	
	let score = 0;
	const userAnswers = [form.q1.value, 
						 form.q2.value,
						 form.q3.value];
	// check answers
	userAnswers.forEach((answer, index) => {
		if(answer === correctAnswers[index]){
			score += 33.33;
		}
	});
	
	// SHOW RESULT ON PAGE
	result.querySelector('span').textContent = `${score}%`;
	result.classList.remove('d-none');
	scrollTo(0,0);
});

