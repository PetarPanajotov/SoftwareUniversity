function simpleCalculator (a, b, op) {
    let res;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    switch (op) {
        case "multiply": res = multiply(a, b); break;
        case "divide": res = divide(a, b); break;
        case "add": res = add(a, b); break;
        case "subtract": res = subtract(a, b); break;
    }
    console.log (res)
}
simpleCalculator(40,

8,

'divide')