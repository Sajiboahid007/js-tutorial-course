const calcAverage = (a ,b ,c) => (a+b+c)/3;
console.log(calcAverage(3,4,5));
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);
const checkWinner = function (aveDolphins,aveKoalas) {
    if(aveDolphins >= 2*aveKoalas){
        console.log(`Dolphins win the trophy (${aveDolphins} vs. ${aveKoalas})`);
    }
    else if(aveKoalas >= 2*aveDolphins)
    {
        console.log(`Koalas win the trophy (${aveKoalas}) vs. ${aveDolphins}`);
    }
    else
        console.log(`No team wins`);

}
checkWinner(scoreDolphins,scoreKoalas);
checkWinner(234,34);