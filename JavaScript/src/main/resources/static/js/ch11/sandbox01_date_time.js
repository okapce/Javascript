// DATE
const now = new Date();

console.log(now);
console.log(typeof now);
console.log('getHours: ', now.getHours()); 

// TIME
console.log('timestamp: ', now.getTime());
console.log(now.toTimeString());

const oldTime = new Date('September 28 2021 16:00:00');

const diff = now.getTime() - oldTime.getTime(); 
console.log('difference of time: ', diff);

const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);

console.log(mins, hours, days);

// CLOCK
const clock = document.querySelector('.clock');
const tick = () => {
	const now = new Date();
	
	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();
	
	const html  = `
		<span>${h} :</span>
		<span>${m} :</span>
		<span>${s}</span>
	`;
	
	clock.innerHTML = html;
};

setInterval(tick, 1000);