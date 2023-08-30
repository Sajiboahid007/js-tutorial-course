let numbers = [];
function addN(number) {
    numbers.push(number);
    console.log(`Number has been add Successfully`);
}
function removeN(number) {
    numbers = numbers.filter(item => item !== number);
    console.log(`Number has been remove successfully`);
}
addN(12);
addN(13);
addN(14);
addN(15);
console.log(numbers);
removeN(14);
console.log(numbers);