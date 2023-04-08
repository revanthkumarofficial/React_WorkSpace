const users = [
    { name: "Rev", age: 25 },
    { name: "Led Zeppelin", age: 30 },
    { name: "Black Sabath", age: 28 },
    ];



const filterUser = users.filter((user) => user.age === 30);


console.log(filterUser);  // [ { name: 'Led Zeppelin', age: 30 } ]