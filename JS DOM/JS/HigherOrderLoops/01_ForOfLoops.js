//Syntax
    // for (const element of object) {
        // body of loop
    // }

//working with index object collection like array, string

//On Array
let nameArray =["Rohit", "Virat", "Hitesh", "Shraddha", "Aman","Kunal"];
let nameArrayStr ="";
for (const nameStr of nameArray) {
    nameArrayStr = nameArrayStr  + nameStr + "\t";
}
// console.log(nameArrayStr);


//OnString
let numberString = "7066326068";
let reverseNumber = "";
for (const num of numberString){
    reverseNumber = num + reverseNumber ;
}
// console.log(reverseNumber);

//OnMaps

const statesInIndia = new Map();
statesInIndia.set("MH","Maharashtra"),
statesInIndia.set("GJ","Gujarat"),
statesInIndia.set("DL","Delhi"),
statesInIndia.set("JK","Jammu & Kashmir");

console.log(statesInIndia);
/*
Map(4) {
  'MH' => 'Maharashtra',
  'GJ' => 'Gujarat',
  'DL' => 'Delhi',
  'JK' => 'Jammu & Kashmir'
}
*/

//combined assess
for (const state of statesInIndia){
    console.log(state);  // state is a array object representing entry, in which 0th index is key and 1st index is value
}
/*
[ 'MH', 'Maharashtra' ]
[ 'GJ', 'Gujarat' ]
[ 'DL', 'Delhi' ]
[ 'JK', 'Jammu & Kashmir' ]
*/

//assessing key and values separately using de-structuring
for (const [key, value] of statesInIndia){
    console.log(`StateCode : ${key} || StateName : ${value}`);  // state is a array object, in which 0th index is key and 1st index is value
}
/*
StateCode : MH || StateName : Maharashtra
StateCode : GJ || StateName : Gujarat
StateCode : DL || StateName : Delhi
StateCode : JK || StateName : Jammu & Kashmir
*/

// NOTE : objects are not iterable collection of data, we cant use FOR-OF loop 