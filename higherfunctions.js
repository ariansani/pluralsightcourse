const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  





//forEach
companies.forEach(function(company) {
    //console.log(company.name);
});

//filter

//get 21 and older

//version 1
// let canDrinkAlcohol = [];
// for (let i = 0; i < ages.length; i++) {
//    if (ages[i] >= 21) {
//        canDrinkAlcohol.push(ages[i]);
//    }
// }

//version 2
// const canDrinkAlcohol = ages.filter(function (age){
//     if (age >= 21) {
//         return true;
//     }
// });

//version 3
const canDrinkAlcohol = ages.filter(age => age >= 21);

//console.log(canDrinkAlcohol);


//filter retail companies
//version 1
// const retailCompanies = companies.filter(function(company){
// if(company.category === 'Retail'){
//     return true;
// }
// });

//version 2
// const retailCompanies2 = companies.filter(company => company['category'] === 'Retail');
//console.log(retailCompanies2);

//version 3
const eightiesCompanies = companies.filter(company => (company['start'] >= 1980 && company['start'] < 1990));
//console.log(eightiesCompanies);

//version 4
const lastedTenYears = companies.filter(company => (company['end'] - company['start'] >= 10));

//console.log(lastedTenYears);


//map
//create array of company names
const testMap = companies.map(company => 
     `${company.name} [${company.start} - ${company.end}]`
);

const agesSquare = ages
    .map(age=> Math.sqrt(age))
    .map(age => age * 2);

//console.log(agesSquare);

//sort

//sort companies by start year
const sortedCompanies = companies.sort((a, b) =>
    (a['start'] > b['start']) ?  1 : -1 
);

//console.log(sortedCompanies);

//sort ages
const sortAges = ages.sort((a,b) => a-b);
//console.log(sortAges);


//reduce

//version 1
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }


//version 2
// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0);

// console.log(ageSum);

//version 3
const ageSum = ages.reduce((total,age) => total + age, 0);

//get total active years for all companies

const totalYears = companies.reduce((total,company)=>
     total + (company['end'] - company['start']),0);

//console.log(totalYears);




//COMBINE ALL METHODS

const combined = ages
.map(age => age * 2) //an array of all the ages multiplied by 2
.filter(age => age >= 40)
.sort((a,b) => a-b)
.reduce((a,b) => a + b, 0);

console.log(combined);