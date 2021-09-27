const link =     window.document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.duckduckgo.com');

link.innerText = 'DuckDuckGo';

const mssg = window.document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');