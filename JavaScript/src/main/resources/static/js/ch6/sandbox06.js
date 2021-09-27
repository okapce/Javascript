const content = document.querySelectorAll('p');

//console.log(content.classList);
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('success');

content.forEach(p => {
	if(p.textContent.includes('Error')){
		p.classList.add('error');
	}
	if(p.textContent.includes('mujica')){
		p.classList.add('success');
	}
});

