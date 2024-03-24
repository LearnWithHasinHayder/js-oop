const result = "Hello".includes("o");
//split
// const splitString = "Hello".reverse();
// console.log(splitString); // true


const reverseString = "hello World".split("").reverse().join("");
console.log(reverseString); // dlroW olleh

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

const reverseString2 = "hello World".reverse();
console.log(reverseString2); // dlroW olleh