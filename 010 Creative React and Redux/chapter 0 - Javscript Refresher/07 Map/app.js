const users = [
{ name: "Rev", age: 25 },
{ name: "Led Zeppelin", age: 30 },
{ name: "Black Sabath", age: 28 },
];


/*
go to each and every individual item of users and 
copy them and create a new object same as users using map Function
*/

const modifiedUser = users.map((user)  => user);

console.log(modifiedUser);


const modifiedUserAge = users.map((user)  => (user.age=0));

console.log(modifiedUserAge); // [ 0, 0, 0 ]

const userAge = users.map(user => user.name);

console.log(userAge); // [ 'Rev', 'Led Zeppelin', 'Black Sabath' ]