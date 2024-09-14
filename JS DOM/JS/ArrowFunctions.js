() => {} //basic structure of arrow function

let reductionOne = (num1, num2) => {
    let result = num1 + num2;
    return result;
};

console.log(reductionOne(33,66)); //99

let reductionTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(reductionTwo(33,66)); //99

let reductionThree = (num1, num2) => (num1 + num2);

console.log(reductionThree(33,66)); //99

//returning object 
let obj = () => ({});
console.log(obj());

let userObj = () => ({username: "Meghsham"}); // {}
console.log(userObj()); // { username: 'Meghsham' }