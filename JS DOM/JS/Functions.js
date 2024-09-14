//function declaration
function greeting (){
    //  function definition
    console.log("Hello JavaScript");
}

//function calling

//storing variable reference in a variable
const functionReference =  greeting;

// console.log("calling trough variable");
functionReference;

// console.log("calling function directly");
// greeting();

// console.log("n\n\n\n");

//function with arguments

function multiply (num1, num2){
    console.log(num1*num2);
}

// multiply(1, 2);


//return statement
function helloWorld (){

    console.log("execute 1");
    console.log("execute 2");
    console.log("execute 3");
    console.log("execute 4");
    return;
    console.log("execute 5");
    console.log("execute 6");
    console.log("execute 7");
}

// helloWorld();


//function returning values
function add (value1 , value2){
   //only code above  return statement will be executed
    return value1 + value2;
    console.log("unreachable statement, never executed");
}

//make sure that value you are using are of correct type otherwise it can generate garbage values that can be of another type also

// console.log(add(10, 2));
// console.log(add(10,"20"));
// console.log(add(100,"a"));

let counter = 1;

function counterPrinter(counter) {

    for (let i = counter; i< 10; i++) {
        if (i>5){
            return i;
        }    
    }
}

console.log(counterPrinter(counter))



//function with rest operator 

function addMultiple(...num){
    let sum =0;
    for (let i = 0;i<num.length;i++) {
        sum = sum + num[i];
    }
    return sum;
}

let result = addMultiple (1,2,3,4,5,6,7,8);

console.log(result);  //36


//corner case


function display (param1, param2, ...paramList){
    console.log(param1); // 12
    console.log(param2, ); // 34
    console.log( ...paramList); //45 56 67 78 89

}

// display(12,34,45,56,67,78,89);

//passing object as argument

function showUser(userObj){
    console.log("Username : "+userObj.userName);
    console.log("Password : "+userObj.password);
}

const userOne = {
    userName: 'Sham',
    password : 'Sh@m'
}

showUser(userOne);
/*
Username : Sham
Password : Sh@m
*/

console.log();


showUser(
    {
        userName: 'Radha',
        password : 'R@dha'
    }
);  
/*
Username : Radha
Password : R@dha
*/


//passing array as argument

function findLength(arg){
   return arg.length;
}

console.log(findLength("Meghsham")); //8 