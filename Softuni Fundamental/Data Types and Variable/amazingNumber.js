function amazingNumber(num) {
    num = num.toString()
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    sum = sum.toString().includes('9');
    let output = sum? "True" : "False"
    console.log(`${num} Amazing? ${output}`)
}
amazingNumber(1233)