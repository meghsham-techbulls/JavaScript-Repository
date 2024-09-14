//Arrays

//Declaring arrays
const numberArray = [1,2,3,4,5,6];
const heroArray = ['Iron Man', 'Captain America', 'Hulk', 'Black Widow', 'Hawk Eye'];
const newArray = new Array('Apple', 'Banana','Grapes','Watermelon');

console.table(typeof numberArray, typeof heroArray,typeof newArray);

// printing array
console.log(numberArray);

//Accessing specific element by index
for (let i = 0;i<heroArray.length;i++){
    console.log(heroArray[i]);
}

const randomThingsArray = [1061, 'Meghsham', new Date(), undefined, null];
console.log(randomThingsArray);
// In JavaScript, arrays can hold heterogeneous elements, meaning they can contain different data types like numbers, strings, objects, and more in a single array
// Also they can be resized by adding or deleting element
