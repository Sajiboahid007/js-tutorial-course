function calAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calAge1(1999);
console.log(age1);
const calAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calAge2(2003);
console.log(`Age 1 is ${age1} \nAge 2 is ${age2}`);

const value = function (value1=0 ,value2=0, value3) {
    console.log(value1,value2,value3)
}
const store=value(12,32,42);
const store2=value(12,42);