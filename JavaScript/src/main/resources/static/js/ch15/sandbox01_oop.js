const names = ['nick', 'pantin'];

const ages  = new Array(20, 30, 50);

const userOne = {}; //builds object

const userTwo = new Object(); //builds object

const userSupreme= {
	username: 'nick', 
	email: 'nickpantin@hotmail.com',
	login(){
		console.log('user has logged in');
	},
	logout(){
		console.log('user has logged out');
	}
};

console.log(userSupreme.name, userSupreme.email);
userSupreme.login();

class User {
	constructor(username, email){
		this.username = username;
		this.email = email;
		this.score = 0;
	}
	login(){
		console.log(`${this.username} has logged in`);
		return this;
	}
	incScore(){
		this.score += 1;
		console.log(`${this.username} has a score of ${this.score}`);
		return this;	
	}
}

User.prototype.logout = function(){
	console.log(`${this.username} has logged out`);	
}

class Admin extends User{
	constructor(username, email, title){
		super(username, email);
		this.title = title;
		
	}
	deleteUser(user){
		users = users.filter((u) => {
			return u.username !== user.username
		})
	}
}



const userA = new User('nickpantin', 'nickpantin@hotmail.com');
const userB = new User('okapce', 'okapce@hgmail.com');
const userC = new Admin('okpc', 'okpc@mymail.com', ' ideal email');

// --------------- //

console.log(userA, userB);
userA.login();
userA.logout();
userA.incScore().incScore().incScore().logout();

let users = [userA,userB,userC];
console.log(users);
userC.deleteUser(userB);
console.log(users);

console.log(userC);

