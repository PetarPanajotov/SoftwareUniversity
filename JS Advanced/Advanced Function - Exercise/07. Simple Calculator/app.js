function calculator() {
    let s1;
    let s2;
    let res;
    return {
        init: (selector1, selector2, resultSelector) => {
            s1 = document.querySelector(selector1);
            s2 = document.querySelector(selector2);
            res = document.querySelector(resultSelector);
        },
        add: () => {     
            res.value = Number(s1.value) + Number(s2.value)
        },
        subtract: () => {
            res.value = Number(s1.value) - Number(s2.value)
        }
    }
}
const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');




