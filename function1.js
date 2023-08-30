`use strict`
function logger() {
    console.log(`I am beginner in javascript`);
}
logger();
logger();
logger();

function fruits(apple , oranges) {
    console.log(apple,oranges);
    const juice = `juice with ${apple} apple and ${oranges} oranges`;
    return juice;
}
fruits(3,5);
const juices =fruits(3,6);
console.log(juices);