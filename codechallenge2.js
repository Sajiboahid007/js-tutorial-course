// console.log(`hi there`);
const massMark=95;
const heightMark= 1.88;
const massJhon=85;
const heightJhon= 1.76;
const BMImark=massMark/heightMark**2;
const BMIjhon=massJhon/heightJhon**2;
console.log(`Mark BMI is ${BMImark.toFixed(3)}\n\Jhon BMI ia ${BMIjhon.toFixed(3)}`);
if(BMImark>BMIjhon)
{
    console.log(`Mark's BMI is higher than jhon!`);
}
else
{
    console.log(`Jhon's BMI is higher than mark!`);
}