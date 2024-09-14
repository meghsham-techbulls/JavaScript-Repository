//Singleton Object
// const user = {}; //It return only one object

//nesting object

// const person = {
//     email : 'johndeo@gmail.com',
//     name : {
//         fullName : {
//             firstName : "john",
//             lastName : "doe"
//         },
//         nickName : "Johnny"
//     },
//     dateOfBirth :{
//         year : 2000,
//         month : 11,
//         day : 1,
//     }
// }

// console.log(person.email);
// // johndeo@gmail.com
// console.log(person.name.fullName);
// // { firstName: 'john', lastName: 'doe' }
// console.log(person.name.nickName);
// // Johnny
// console.log(person.dateOfBirth)
// // { year: 2000, month: 11, day: 1 }

// let objectOne = {a1:10, b1:20};
// console.log(objectOne);
// console.log();

// let objectTwo = {a2:100, b2:200};
// console.log(objectTwo);
// console.log();

// let objectThree = {objectOne, objectTwo};
// console.log(objectThree);
// console.log();

// let objectFour = Object.assign({},objectOne, objectTwo); 
// console.log(objectFour);
// console.log();
// //using empty object is good practice but not syntax mandatory


// let objectFive ={...objectOne,...objectTwo}; 
// // as we are creating new object wrap argument object in braces
// console.log(objectFive);


// //arrayOfObject
// let arrayOfBalls = [
//     {
//         usedIn : 'tennis',
//         price : 50
//     },
//     {
//         usedIn : 'cricket',
//         price : 140
//     },
//     {
//         usedIn : 'basketball',
//         price : 500
//     },
//     {
//         usedIn : 'football',
//         price : 430
//     },
//     {
//         usedIn : 'baseball',
//         price : 280
//     },
// ];

// console.log(arrayOfBalls);

let student = {
    id : 123,
    name : "Pratham",
    mathsGrade : 'A+',
    scienceGrade : 'A',
    historyGrade : 'B+',
    englishGrade : 'O',
};

let studentKeys = Object.keys(student);
let studentValues = Object.values(student);

for (let i = 0;i<studentKeys.length;i++){
console.log(`${studentKeys[i] }==> ${studentValues[i]}`);
}

let studentEntries = Object.entries(student);
console.log(studentEntries);


