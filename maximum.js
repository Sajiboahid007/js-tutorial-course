const numberSeries = [-2,-54,-2,-5,-4,-7,-4,-97,-1];
let maximumNumber = numberSeries[0];
let minimumNumber = numberSeries[0];
for(let i=0;i < numberSeries.length;i++)
{

    if(maximumNumber < numberSeries[i])
    {
        maximumNumber = numberSeries[i];
        console.log(`succesfully add`);
    }
    if(minimumNumber > numberSeries[i])
    {
        minimumNumber = numberSeries[i];
        console.log(`minimum`);
    }
}
console.log(`Maximum number is ${maximumNumber}`);
console.log(`Minimum number is ${minimumNumber}`);