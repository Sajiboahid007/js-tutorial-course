function fruitProcessor(apple,orange) {
    console.log(apple,orange);
    const juice = `juice with ${apple} apples and ${orange} oranges`;
    return juice;
}
// const appleJuice = fruitProcessor(4,0);
// console.log(appleJuice);
console.log(fruitProcessor(5,0));
console.log(fruitProcessor(10,30));

function calAge1(birthYear) {
    return  2023 - birthYear;
}
const  age =calAge1(2003);
console.log(age);

const calAge2 = function (birthYear) {
    return 2024 - birthYear;

}
const age2=calAge2(2003) ;
console.log(age,age2);