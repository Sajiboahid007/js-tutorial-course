const calTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
const bills =[125,555,44];
const tips =[calTip(bills[0]),calTip(bills[1]),calTip(bills[2]),];
const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2],]
console.log(bills,tips,total);