
// arrow function with 1 parameter
const sayHello = (name) => {
    return `hello there ${name}`;

};

const greeting = sayHello();   

const nickName = sayHello("Bobby");

console.log(greeting);  //  hello there undefined

console.log(nickName);  //  hello there Bobby



/*
Above function can be written as follows

here single parameter so non need brackets

const sayHello = name => `hello there ${name}`;
*/