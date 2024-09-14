const nameArray  =["Jems","Rina","Pete","Ted","Rock","Mack"];
console.log(`Elements of name array are :`);
for (name of nameArray) {
    // console.log(name);
}

const myName = "TechBuls";
for (const char of myName) {
    // console.log(char);
}

//Maps

const mapOfHeros = new Map();
mapOfHeros.set("IM", "Iron Man");
mapOfHeros.set("CA", "Captain America");
mapOfHeros.set("BW", "Black Widow");
mapOfHeros.set("HE", "Hawk Eye");
mapOfHeros.set("HK", "Hulk");

// console.log(mapOfHeros);

//looping over keys and values separately
for(const [key, value]  of mapOfHeros){
    // console.log(`${key}, ${value}`);
}

//looping over entries
for(const codeName  of mapOfHeros){
    console.log(codeName);
}

//using for of loop we can iterate over arrays, strings, maps (not objects)




