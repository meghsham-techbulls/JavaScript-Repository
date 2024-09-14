const company= {
    companyName : 'TechBulls',
    companyLocation :'Kalyani Nagar' 
}

//instead of square notation or dot operator accessing use this suger-coating syntax as makes code more readable    
const {companyName} = company;
console.log(companyName); //TechBulls

const {companyLocation : loc} = company;
console.log(loc); // Kalyani Na gar




