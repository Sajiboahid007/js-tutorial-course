let numbers =[];
 function addNumber (number) {
     numbers = [...numbers, number];
    //numbers.push(number);
    console.log(`${number} has been added`);
}
function removedNumber(number) {
     // numbers = numbers.filter(function(value){
     //     console.log(value);
     //     return number !== value;
     // });
    numbers = numbers.filter(item => item !== number);
    console.log(`number has been remove`);
     // const index = numbers.indexOf(number);
     // if(index !== -1)
     // {
     //     numbers.splice(index,1);
     //     console.log(`number has been remove`);
     // }
     // else
     //     console.log(`number not found `);
}
addNumber(12);
addNumber(13);
addNumber(14);
addNumber(15);
console.log(numbers);
removedNumber(14);
console.log(numbers);
