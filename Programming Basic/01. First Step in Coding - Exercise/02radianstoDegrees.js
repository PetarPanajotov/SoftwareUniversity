function radianstoDegrees (input) {
    
    let rad = Number(input[0]);

    let degree = rad*180/Math.PI;

    console.log (degree)
}
radianstoDegrees(["3.1416"]);
radianstoDegrees(["6.2832"]);
