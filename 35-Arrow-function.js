const calAge2 = function (birthYear) {
    return 2023 - birthYear;
}
//arrow function
const calAge3 = birthYear => 2023 - birthYear;
const age3=calAge3(2003);
console.log(age3);

const yearUntilRetirement =( birthYear ,firstName) => {
    const  age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(2003, "Sajib Oahid"));
console.log(yearUntilRetirement(2002, "Sarna Akter"));
