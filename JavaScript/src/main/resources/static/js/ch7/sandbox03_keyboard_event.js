const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,}$/;


form.addEventListener('submit', event => {
	event.preventDefault();
	
	// VALIDATION
	const username = form.username.value;
	
	if(usernamePattern.test(username)){
		feedback.textContent = 'username is valid!';
	}else{
		window.alert("user name is not valid, use a min. of 6 characters");
	}
});

// LIVE FEEDBACK
form.username.addEventListener('keyup', event => {
	console.log(event.target.value, form.username.value);
	if(usernamePattern.test(event.target.value)){
		console.log('passed');
		form.username.setAttribute('class', 'success');
	}else{
		console.log('failed');
		form.username.setAttribute('class', 'error');
	}
});

