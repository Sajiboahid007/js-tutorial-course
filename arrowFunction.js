const caleAge2 = function (birthYear) {
    return 2023-birthYear;
}
const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(2003));

const yearUntilRetirement = (birthYear, firstName) => {
    const age =2023 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in after ${retirement} years`;
}
console.log(yearUntilRetirement(2000,"Sajib") );
console.log(yearUntilRetirement(1996,"Shakil") );