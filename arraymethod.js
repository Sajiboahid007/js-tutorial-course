const items = [
    {name: "bike",   price: 100},
    {name: "tv",   price: 200},
    {name: "album",   price: 10},
    {name: "book",   price: 5},
    {name: "phone",   price: 500},
    {name: "computer",   price: 1000},
    {name: "keyboard",   price: 25},
]
const filterItems = items.filter(item=>{
    return item.price <= 100;
})

console.table(filterItems);

const mapItems = items.map(item =>{
    return item.price;
})

console.table(mapItems);

const fundItem = items.find(item => {
    return item.name === "bike";
})
console.table(fundItem);

items.forEach(item => {
    console.table(item.name );
})

const hasInexpensiveItems = items.some(item => {
    return item.price <= 100;
})
console.log(hasInexpensiveItems);

const total = items.reduce((totalSum,item) => {
    return item.price + totalSum
},0)
console.log(total);

const int = [12,3,56,3,3,235,64,64];

const sumTotal = int.reduce((arraySum,item) =>{
    return item + arraySum
},0) ;
console.log(sumTotal);

const checkItems = int.includes(3)
console.log(checkItems);