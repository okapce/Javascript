const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo => {
	const html = `  
	<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    
    list.innerHTML += html;
};

addForm.addEventListener('submit', event => {
	event.preventDefault();
	const todo = addForm.add.value.trim();
	
	if(todo.length){
		generateTemplate(todo);
		addForm.reset();
	}
});

// DELETE TODO'S
list.addEventListener('click', event => {
	if(event.target.classList.contains('delete')){
		event.target.parentElement.remove();
	}
});

// SEARCH
const filterTodos = (term) => {
	Array.from(list.children)
	.filter((element) => !element.textContent.includes(term))
	.forEach((element) => element.classList.add('filtered'));
	
		Array.from(list.children)
	.filter((element) => element.textContent.includes(term))
	.forEach((element) => element.classList.remove('filtered'));
};

search.addEventListener('keyup', event => {
	const term = search.value.trim();
	filterTodos(term);
});

