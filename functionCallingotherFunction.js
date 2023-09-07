function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples , oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juices =  `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juices;
}

console.log(fruitProcessor(2 ,4));