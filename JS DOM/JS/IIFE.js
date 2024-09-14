//Immediately Invoked Function Expression (IIFE)''

//named IIFE
(
    function sayHello(){
        console.log("Hello World, Named IIFE");
    }
)();

//unnamed IIFE using arrow function
(()=>{
    console.log("Hello World, I am unnamed IIFE");
})();

//parameterized IIFE
( // method container
    //parameter
    (param)=>{
        console.log(param);
    }
)
("Meghsham");


//write ; to end IIFE 