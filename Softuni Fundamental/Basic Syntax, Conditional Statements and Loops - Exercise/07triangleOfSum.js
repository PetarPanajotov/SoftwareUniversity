function triangleOfSum(num) {
    let sum = 0;
    let str = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
        str += i + " ";
        }
    str += "\n";
    }
console.log(`${str}`);
}
triangleOfSum(3)