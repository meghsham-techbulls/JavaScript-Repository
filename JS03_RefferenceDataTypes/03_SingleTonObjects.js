// Singleton Object: Ensures a single instance of an object and provides a global access point to that instance.
// Using JavaScript Literals:
// Implemented using an IIFE to encapsulate and manage the single instance.
// The instance is created only once and is accessed through a public method.

// Creating Object

//using  literals

//creating object with properties
const userKeys = Symbol("");
    const user = {
        id: 1,
        name : "John Doe",
        password : "UserJohn",
        //internally key are string but we don't explicitly have to quote it if it is string without spaces.
        age : 19,
        city : 'Pune',
        "email id" : 'johndoe@mail.com',
        //if property name has white spaces in between then quote it
        [userKeys] : "UserKeyValueForUserJohnDoe"
    }

    const user2 = {
        id: 1,
        name : "Emma Watson",
        password : "EmmaWatson",
        //internally key are string but we don't explicitly have to quote it if it is string without spaces.
        age : 19,
        city : 'New York',
        "email id" : 'emmawatson@mail.com',
        //if property name has white spaces in between then quote it
        [userKeys] : "UserKeyValueForUserEmmaWatson"
    }

    // console.log(user);
    // console.log(user2);
    // console.log();

//add more properties to object
user.contact = 7066326068;
// console.log(user);
// console.log();

//update existing property values
user.age = 21;
user["email id"] = 'johndoe@gmail.com';
user.password = 'PassJohn';
// console.log(user);
// console.log();

//reading specific property value
// console.log(`${user.name} having email id ${user['email id']} is from ${user.city}`); 
// for single word properties use dot natation, but for property with space in between use square notation which include quoted  string property name

console.log();

//delete property
delete user.contact;
// console.log(user);  

const employee1 = {
    id: 1,
    name: "Steve"
}

//create unmodifiable object

let fixedObject = {
    str : "This object can't be modified"
}

Object.freeze(fixedObject);// method makes the object immutable, meaning you cannot add, remove, or change its properties.

// fixedObject.str = "Changed";
// console.log(fixedObject);
// fixedObject.str = "Modified";
// console.log(fixedObject);

// Object.f
// fixedObject.str = "Updated";
// console.log(fixedObject);


//adding function to objects
user.introduce =  function(){
    console.log(`Hey I am ${user.name}`);    
}
//// console.log((user.introduce).); 
//we cant directly print the reference just pass them to another function
//calling function in object
let functionRef = user.introduce; 
// executing function without reference will return 
// functionRef();
// user.introduce();



