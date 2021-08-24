// OBJ literals
const tasks = [
				{task: 'exercise', effort: 65},
				{task: 'shower', effort: 20}
];

console.log(tasks);

let user = {
	name: "nick",
	age: 35,
	tasks: [{task: 'exercise', effort: 65},
				{task: 'shower', effort: 20}],
	login(){ //: function
		console.log("user has logged in");
	},
	logout(){ //: function
		console.log("user has logged out");
	},
	logTasks(){ //: function
		console.log("user had these tasks: ");
		this.tasks.forEach(task => {
			console.log(task.task , task.effort);
		})
	}
};

console.log(user);
console.log(user.name);

const key = 'age';
console.log(user[key]);

user.login();
user.logout();
user.logTasks();
console.log(this);

