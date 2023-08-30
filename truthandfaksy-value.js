// 5 falsy value : 0,"",undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));

const money = 0;
if(money)
{
    console.log(`don't spend money`);
}
else
{
    console.log("You should get a job!");
}
let height;
if(height)
{
    console.log("yay height is defined");
}
else
{
    console.log("height is undefined");
}