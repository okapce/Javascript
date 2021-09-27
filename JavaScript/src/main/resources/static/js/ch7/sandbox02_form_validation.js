const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', event => {
	event.preventDefault();
	
	// VALIDATION
	const username = form.username.value;
	const usernamePattern = /^[a-zA-Z]{6,}$/;
	
	if(usernamePattern.test(username)){
		feedback.textContent = 'username is valid!';
	}else{
		window.alert("user name is not valid, use a min. of 6 characters");
	}
});

