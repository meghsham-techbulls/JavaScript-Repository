/*
Syntax
    for (const key in object) {
        
    }
*/

let FANG  = {
    F : "Facebook",
    A : "Amazon",
    N : "Netflix",
    G : "Google"
}

for (const letter in FANG)  {
    console.log(`${letter} : ${FANG[letter]}`);
    
}
/*
F : Facebook
A : Amazon
N : Netflix
G : Google
*/

let numArray= [12,34,56,78,90]
for (const index in numArray){
    console.log(`${index} ==> ${numArray[index]}`);
}
/*
0 ==> 12
1 ==> 34
2 ==> 56
3 ==> 78
4 ==> 90
*/

let str = "TechBulls SoftTech";
let charString = [];
for (const char in str){
   console.log(`On Index ${char} character ${str[char]} is stored `);
   ;
}
console.log(charString);

/*
On Index 0 character T is stored 
On Index 1 character e is stored 
On Index 2 character c is stored 
On Index 3 character h is stored 
On Index 4 character B is stored 
On Index 5 character u is stored 
On Index 6 character l is stored 
On Index 7 character l is stored 
On Index 8 character s is stored 
On Index 9 character   is stored 
On Index 10 character S is stored 
On Index 11 character o is stored 
On Index 12 character f is stored 
On Index 13 character t is stored 
On Index 14 character T is stored 
On Index 15 character e is stored 
On Index 16 character c is stored 
On Index 17 character h is stored 
 */

// FOR-IN loop does not work with map