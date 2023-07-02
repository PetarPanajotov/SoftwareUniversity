function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = Number.isInteger(sum);
    if (type === true) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
    //let output = type === true? "Integer" : "Float";
    //console.log(output)
}
integerAndFloat(100, 200, 303.1)