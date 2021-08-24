// template strings

const title = 'Top 10';
const author = 'me';
const likes = 30;

let result = `The blog called ${title} by ${author} and has ${likes} likes`;
console.log(result);


// html template
let html = `
	<h2>${title}</h2>
	<p>By ${author}</p>
	<span>This blog has ${likes} likes</span>
	`;
console.log(html);