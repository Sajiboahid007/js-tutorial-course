const years = [1991,2007,1969,2003];
const ages = [];
for(let i=0;i<years.length;i++){
    ages.push(2023-years[i]);
}
console.log(ages);

//break continue
const jonas =[
    "sajib",
    "oahid",
    "teacher",
    ['michale',"peter","steven"],
        true
];
console.log(`-----------continue------------`);
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i]);
}
console.log(`-----------break------------`);
for(let i=0;i<jonas.length;i++){
    if(typeof jonas[i] == "number") break;
    console.log(jonas[i]);
}