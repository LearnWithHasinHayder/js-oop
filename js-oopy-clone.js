const Person = {
    firstName: 'John',
    lastName: 'Doe',
    email:'john@doe.com',
    fullName:function(){
        // return this.firstName + ' ' + this.lastName;
        return `${this.firstName} ${this.lastName}`;
        // return Person.firstName + ' ' + Person.lastName;
    },
    greet(){
        return `Welcome ${this.fullName()}!`;
    }
}

Person.firstName = 'Jane';
//any work
Person.firstName = 'John';

const person1 = Object.create(Person);
// const person1 = Object.assign({}, Person);
const person2 = Object.create(Person);
person2.firstName = 'Jane';

console.log(person1.firstName);
console.log(person2.firstName);