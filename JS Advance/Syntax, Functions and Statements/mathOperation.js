function mathOperation(firstNum, secondNum, operator) {
    let resultObj = {
        "+": (a,b) => {return a+b},
        "-": (a,b) => {return a-b},
        "*": (a,b) => {return a*b},
        "/": (a,b) => {return a/b},
        "%": (a,b) => {return a%b},
        "**": (a,b) => {return a**b}
    }
    let result = resultObj[operator](firstNum, secondNum);
    console.log(result)
}
mathOperation(5, 6, '+');
