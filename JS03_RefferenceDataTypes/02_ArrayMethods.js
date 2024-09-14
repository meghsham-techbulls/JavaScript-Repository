// Initializing an empty array for storing laptop brands
let laptops = [];

// Adding elements to the end of the array
laptops.push('Dell');   // Adds 'Dell' to the end of the array
laptops.push('HP');     // Adds 'HP' to the end of the array
laptops.push('Lenovo'); // Adds 'Lenovo' to the end of the array
laptops.push('Apple');  // Adds 'Apple' to the end of the array
laptops.push('Mi');     // Adds 'Mi' to the end of the array

// Display the array after push operations
console.log('Laptops after push operations:');
console.log(laptops); // Expected output: ['Dell', 'HP', 'Lenovo', 'Apple', 'Mi']

// Removing the last element from the array
laptops.pop(); // Removes 'Mi' from the end of the array

// Display the array after pop operation
console.log('\nLaptops after pop operation (removing last element):');
console.log(laptops); // Expected output: ['Dell', 'HP', 'Lenovo', 'Apple']

// Adding an element to the beginning of the array
laptops.unshift('LG'); // Adds 'LG' to the start of the array

// Display the array after unshift operation
console.log('\nLaptops after unshift operation (adding at the beginning):');
console.log(laptops); // Expected output: ['LG', 'Dell', 'HP', 'Lenovo', 'Apple']

// Removing the first element from the array
laptops.shift(); // Removes 'LG' from the start of the array

// Display the array after shift operation
console.log('\nLaptops after shift operation (removing first element):');
console.log(laptops); // Expected output: ['Dell', 'HP', 'Lenovo', 'Apple']

// Checking if the array contains certain elements
console.log('\nChecking if the array contains "Dell":', laptops.includes("Dell")); // Expected output: true
console.log('Checking if the array contains "Alienware":', laptops.includes("Alienware")); // Expected output: false

// Finding the index of an element
console.log('Index of "Lenovo":', laptops.indexOf("Lenovo")); // Expected output: 2

// Initializing a second array of different laptop brands
const laptops2 = ['Razer', 'MSI', 'Mi', 'Vaio'];

// Combining the laptops array into a string and joining with another array
const arrayInString1 = laptops.join(); // Joins the laptops array into a comma-separated string
const arrayInString2 = laptops.join(', ') + ', ' + laptops2.join(', '); // Joins both arrays into a comma-separated string

// Display the joined strings
console.log('\nCombining laptops array into string:');
console.log('String from laptops array:', arrayInString1); // Expected output: 'Dell,HP,Lenovo,Apple'
console.log('Combined string of both arrays:', arrayInString2); // Expected output: 'Dell, HP, Lenovo, Apple, Razer, MSI, Mi, Vaio'

// Original number array for slicing demonstration
const numberArray1 = [0,1,2,3,4,5,6,7,8,9,10];
console.log("\nOriginal numberArray:");
console.log(numberArray1); // Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Slicing the array from index 3 to 6 (7 is excluded)
const slicedArray = numberArray1.slice(3, 7);
console.log("Sliced array (from index 3 to 6):");
console.log(slicedArray); // Expected output: [3, 4, 5, 6]
console.log("Original numberArray after slicing:");
console.log(numberArray1); // Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (unchanged)

// Splicing the array (modifies the original array)
const numberArray2 = [0,10,20,30,40,50,60,70,80,90,100];
console.log("\nOriginal numberArray2:");
console.log(numberArray2); // Expected output: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Splicing removes 7 elements starting from index 3
const splicedArray = numberArray2.splice(3, 7);
console.log("Spliced array (7 elements starting from index 3):");
console.log(splicedArray); // Expected output: [30, 40, 50, 60, 70, 80, 90]
console.log("Original numberArray2 after splicing:");
console.log(numberArray2); // Expected output: [0, 10, 20, 100]

// Working with jagged arrays
let jaggedArray1 = [1, [2], 3, [4, 5, 6], 7, [8, 9]];

// Looping over jagged array and displaying its contents
console.log('\nLooping over jagged array:');
for (let i = 0; i < jaggedArray1.length; i++) {
    console.log(`Index ${i} contains: ${jaggedArray1[i]}`);
}

// Accessing a specific element of the jagged array
console.log(`Element at jaggedArray1[3][1] is ${jaggedArray1[3][1]}`); // Expected output: 5

// Arrays for concatenation demonstration
let thingsArrayOne = ['Table', 'Chair', 'Fan'];
let thingsArrayTwo = ['Cupboard', 'Hanger', 'Stool'];

// Displaying original arrays
console.log('\nOriginal Arrays:');
console.log('thingsArrayOne:', thingsArrayOne);
console.log('thingsArrayTwo:', thingsArrayTwo);

// Concatenating the two arrays
let concatenatedArray = thingsArrayOne.concat(thingsArrayTwo);

// Displaying concatenated result
console.log('Concatenated Array:');
console.log(concatenatedArray); // Expected output: ['Table', 'Chair', 'Fan', 'Cupboard', 'Hanger', 'Stool']

// Using the spread operator to combine arrays
let suvCars = ['Hyundai Creta', 'Tata Punch', 'Kia Seltos'];
let sedanCars = ['Honda City', 'Maruti Dzire', 'Tata Tigor'];

// Combining arrays using the spread operator
let cars = [...suvCars, ...sedanCars];

// Displaying arrays with spread operator results
console.log('\nCars Arrays:');
console.log('suvCars:', suvCars); // Expected output: ['Hyundai Creta', 'Tata Punch', 'Kia Seltos']
console.log('sedanCars:', sedanCars); // Expected output: ['Honda City', 'Maruti Dzire', 'Tata Tigor']
console.log('Combined cars array:', cars); // Expected output: ['Hyundai Creta', 'Tata Punch', 'Kia Seltos', 'Honda City', 'Maruti Dzire', 'Tata Tigor']

// Flattening jagged array
let jaggedNumberArray = [0, [1, 2, [3, [4, 5], 6, 7], 8], 9];

console.log('\nOriginal Jagged Number Array:');
console.log(jaggedNumberArray);

// Flattening at different levels
console.log('Flat Level 0:', jaggedNumberArray.flat(0)); // Expected output: [0, [1, 2, [3, [4, 5], 6, 7], 8], 9]
console.log('Flat Level 1:', jaggedNumberArray.flat(1)); // Expected output: [0, 1, 2, [3, [4, 5], 6, 7], 8, 9]
console.log('Flat Level 2:', jaggedNumberArray.flat(2)); // Expected output: [0, 1, 2, 3, [4, 5], 6, 7, 8, 9]
console.log('Flat Level 3:', jaggedNumberArray.flat(3)); // Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('Flat Level Infinity:', jaggedNumberArray.flat(Infinity)); // Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Checking if variables are arrays
let arr1;
let arr2 = [];

console.log('\nIs arr1 an array?', Array.isArray(arr1)); // Expected output: false
console.log('Is arr2 an array?', Array.isArray(arr2)); // Expected output: true

// Creating arrays from various sources
console.log('Array created from string "Phoenix":', Array.from("Phoenix")); // Expected output: ['P', 'h', 'o', 'e', 'n', 'i', 'x']
console.log('Array created from number (as string):', Array.from(new String(123456))); // Expected output: ['1', '2', '3', '4', '5', '6']
//console.log(Array.from({name:'john doe'})); //creates an empty array as it is not specified of what array contains keys or values

let score1 = 90;
let score2 = 89;
let score3 = 70;
let score4 = 67;
let score5 = 38;

console.log(Array.of(score1,score2,score3,score4,score5));
