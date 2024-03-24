class Person{
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    greet(){
        return `Welcome ${this.fullName()}!`;
    }
}

const person1 = new Person('John', 'Doe', 'john@doe.com');
const person2 = new Person('Jane', 'Doe', 'jane@doe.com');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName());
console.log(person1.greet());

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName());
console.log(person2.greet());
