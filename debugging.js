const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",

        value: parseFloat(prompt(`degree celsius`)),
    };
    console.log(measurement);
    const kelvin = measurement.value+273;
    return kelvin;
}
console.log(measureKelvin());