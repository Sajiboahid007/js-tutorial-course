const mark ={
    fullName: "Sajib Oahid",
    mass: 55,
    height: 1.6,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
}
const john ={
    fullName: "shakil rana",
    mass: 56,
    height: 1.7,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(`${mark.fullName}'s BMI ${mark.bmi.toFixed(2)}`);
console.log(`${john.fullName}'s BMI ${john.bmi.toFixed(2)}`);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(2)})`)
}
else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(2)})`)
}
