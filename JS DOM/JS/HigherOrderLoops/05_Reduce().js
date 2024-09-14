const userArrays = [
    {firstName : "Chetan", lastName : "Bhagat"},
    {firstName : "Robbin", lastName : "Sharma "},
    {firstName : "Ami", lastName : "Ganatra"},
    {firstName : "Sudha", lastName : "Murti"},
    {firstName : "Charles", lastName : "Darwin"}
   	
]

console.log(userArrays.map(item =>item.firstName)); 

console.log(userArrays.filter(item=> item.firstName[0]=='C'));
