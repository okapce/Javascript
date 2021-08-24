// String

let email = "nickpantin@hotmail.com"
console.log("email: " + email);

//let result = email.slice(0,10);

//let result = email.lastIndexOf('n');

//let result = email.substr(0,10);

let result = email.replace('ni' ,'Ni').substr(0,10);

console.log("user: " + result);

// concat
let firstName = "Nick";
let lastName = "Meyer";
let fullName = firstName + ' ' + lastName;

console.log("Name: " + fullName);