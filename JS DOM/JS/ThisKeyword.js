/*
Global object of node environment and browser environment is different
In Browser Environment, it is called 'Window' and comes with properties and function which can be used to handle browser event and processing
In Node Environment, it is known as 'global' and it is completely empty
*/


// console.log("this is global context ==> "+this); //object is concatenated with string
// // this is global context ==> [object Object]
// console.log(this); // otherwise empty object is returned
// // {}   
 


const studentObj = {
    id: "123",
    name: "Suraj More",
    message : function printStudent() {
        //this points to current context i.e key and values of object
        console.log("Student ID : "+this.id);
        console.log("Student Name : "+this.name);
        // console.log(this);
    }

}

console.log(studentObj);
// { id: '123', name: 'Suraj More', message: [Function: printStudent] }
//key-value pair for fields and identifier and function reference of function


// studentObj.message();

//changing the values of object 

studentObj.id =321;
studentObj.name = "Saurabh Deshmukh";
// studentObj.message();
