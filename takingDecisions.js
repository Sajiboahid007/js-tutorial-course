const age = 11;
const isOldEnough = age>=18;

if(isOldEnough)
{
    console.log(`Sarah can start driving licence`);
}
else
{
    const yearLeft=18-age;
    console.log(`Sarah is too young. wait another ${yearLeft} years :`);
}

const birthYear = 2012;
let century
if(birthYear<=2000)
{
  century=20;
}
else
{
   century=21;
}
console.log(century);