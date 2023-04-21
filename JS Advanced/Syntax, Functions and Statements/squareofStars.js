function squareofStars(num) {
    let rectancleLength = '';
    for (let i = 0; i < num; i++) {
        rectancleLength += '*' + ' '
    }
    for (let j = 0; j < num; j++) {
        console.log(rectancleLength)
    }
}
squareofStars(5)