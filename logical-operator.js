console.log(`hi there`);
const hasDriversLicense=true; //A
const hasGoodVision=false;//B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive)
{
    console.log(`Sarah is able to drive!`);
}
else
{
    console.log(`Someone else should drive`);
}
const isTried =  true; //C
console.log(hasDriversLicense || hasGoodVision || isTried);

console.log(`------------------***------------------`);

if(hasDriversLicense && hasGoodVision && !isTried)
{
    console.log(`Sarah is able to drive`);
}
else
{
    console.log(`Someone else should drive..`);
}