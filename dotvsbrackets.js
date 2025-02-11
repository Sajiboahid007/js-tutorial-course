const jonas ={
    firstName: "Sajib",
    lastName: "Oahid",
    age: 2023-2003,
    job: "Students",
    friends: ["name1",'name2','name3']
}
console.log(jonas);

console.log(jonas.firstName);
console.log(jonas["lastName"]);

const nameKey= "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
const inFu= prompt(`what do you know about Sajib? chose between firstName, lastName, job, and friends`);
console.log(jonas[inFu]);
