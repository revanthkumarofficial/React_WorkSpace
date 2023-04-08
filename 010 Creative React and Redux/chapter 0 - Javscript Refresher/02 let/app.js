for (let i = 0; i < 10; i++) {

    console. log(i);
}

// ReferenceError: i is not defined because i is block level scoped
console.log(`This is i : ${i}`);
