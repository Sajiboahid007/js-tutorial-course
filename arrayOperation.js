const friends = ['sajib','oahid','shakil','munsur ali'];
const newLength = friends.push('shahanaz');
console.log(friends);
console.log(newLength);

friends.unshift("new member");
console.log(friends);

const popped= friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("munsur ali"));
//new version is data in friends

console.log(friends.includes("sajib"));
console.log(friends.includes("shahanaz"));
console.log(friends.includes(25));

if(friends.includes("shakil"))
{
    console.log(`you have a brother called Shakil`);''
}