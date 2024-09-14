let internArray = ["sourabh", "pawan","ashutosh","nikhil"];

internArray.forEach(element => {
  console.log(element.toLocaleUpperCase());
});

let bikes = [
    {name : "RE GT 650", average : "25"},
    {name : "RE Classic 350", average : "40"},
    > >>{name : "RE Gorila 450", average : "35"},
    {name : "RE Himalayan", average : "27"},
    {name : "RE Meteor", average : "28"}
]

bikes.forEach(bike => {
    console.log(`${bike.name} => ${bike.average}`);
})