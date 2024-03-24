const Person = {
    firstName: 'John',
    lastName: 'Doe',
    email:'john@doe.com',
    emails:[],
    fullName:function(){
        // return this.firstName + ' ' + this.lastName;
        return `${this.firstName} ${this.lastName}`;
        // return Person.firstName + ' ' + Person.lastName;
    },
    greet(){
        return `Welcome ${this.fullName()}!`;
    },
    howManyEmails(){
        return this.emails.length;
    },
}

Person.emails.push('p1@doe.com');
Person.emails.push('p2@doe.com');

Person.sayHi = function(){
    return 'Hi';
}
console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.fullName());
console.log(Person.greet());
console.log(Person.sayHi());

Person.firstName  = 'Jane';

console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.fullName());
console.log(Person.greet());
console.log(Person.sayHi());

console.log(Person.howManyEmails());

// const personString = JSON.stringify(Person);

// const newPerson = JSON.parse(personString);
