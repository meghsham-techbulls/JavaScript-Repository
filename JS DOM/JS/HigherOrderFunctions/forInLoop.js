const myLaptop  = {
    name : "EliteBook",
    make : "HP",
    processor : "Intel i5",
    os : "Linux Mint 22"
}

for (const key in myLaptop){
    console.log(`${key.toUpperCase()} : ${myLaptop[key]}`);
}




const arr = [6,5,4,3,7,8,9]

for (const key in arr){
    console.log(arr[key]); // in array and string the key is index number and value is element stored on respective index
}


