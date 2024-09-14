// callback with function reference

let num = [9,8,5,0,2,3,1].sort();

function numberFactorial(item,index,arr){
    let numberFactorialValue = 1;  // 1
    for (i=item;i>0;i--){
        numberFactorialValue = numberFactorialValue * i;
        num.pop(item)
    }
    console.log();
    
    console.log(index,item, numberFactorialValue,arr);
}

num.forEach(numberFactorial);
// FOR-EACH 

// callback with arrow function

const myTechStack = ["C","Cpp", "Java", "JavaScript", "HTML", "CSS","SpringBoot","React","Git","Github","SQL","Markdown",];
let str = "My can work on ";
myTechStack.forEach((technology) => {
    if (technology!=myTechStack[myTechStack.length-1])
        str += technology.concat(", ");
    else
    str += technology;
});

console.log(str);

/*  Output
My can work on C, Cpp, Java, JavaScript, HTML, CSS, SpringBoot, React, Git, Github, SQL, Markdown
*/




//ForEachOnObject

const myFavMovies =  [
    {
      "title": "Bhool Bhulaiyaa 2",
      "director": "Anees Bazmee",
      "lead_actors": ["Kartik Aaryan", "Kiara Advani", "Tabu"],
    },
    {
      "title": "Gangubai Kathiawadi",
      "director": "Sanjay Leela Bhansali",
      "lead_actors": ["Alia Bhatt", "Ajay Devgn"],
    },
    {
      "title": "Laal Singh Chaddha",
      "director": "Advait Chandan",
      "lead_actors": ["Aamir Khan", "Kareena Kapoor Khan"],
    }
  ];

let counter =0;
console.log(`\nMovies in JSON object : `);

myFavMovies.forEach ((item)=>{
console.log(`Movie No ${++counter}`);
console.log(`Movie title ${item.title}`);
console.log(`Movie director ${item.director}`);
console.log(`Movie lead_actors ${item.lead_actors}`);
console.log()});    