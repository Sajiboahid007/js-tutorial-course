const temp = [3,-2,-6,-1,"error",9,13,17,15,9,5];
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0]
    for(let i=0;i<temps.length;i++){
        if(typeof temps[i] !== "number") continue;

        if(temps[i] > max) max=temps[i];
        if(temps[i] < min) min=temps[i];
    }
    console.log(max, min);
    return max - min;
}
const amplitude = calcTempAmplitude(temp);
console.log(amplitude);


