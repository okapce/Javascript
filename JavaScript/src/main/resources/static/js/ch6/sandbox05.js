const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px'); //overrides style

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';