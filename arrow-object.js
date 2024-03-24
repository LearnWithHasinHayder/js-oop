// function greet(fN, lN){
//     return `Welcome ${fN} ${lN}!`;
// }

// const greet = function(fN, lN){
//     return `Welcome ${fN} ${lN}!`;
// }

// const greet = (fN, lN) => `Welcome ${fN} ${lN}!`;

// const greet = (fN, lN) => {
//     return `Welcome ${fN} ${lN}!`;
// }

// const result = greet('John', 'Doe');
// console.log(result);

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    fullName: () => `${Person.firstName} ${Person.lastName}`,
    greet: () => `Welcome ${Person.fullName()}!`
}

const result = Person.fullName();
console.log(result);