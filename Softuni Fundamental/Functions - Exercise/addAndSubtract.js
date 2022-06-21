// function addAndSubtract (num1, num2, num3) {
//     let sum = (num1, num2) => num1 + num2;
//     let subtract = (sum, num3) => sum - num3
//     let sumFirstandSecond = sum(num1, num2);
//     let subtractSumandThird = (subtract(sumFirstandSecond, num3))
//     console.log (subtractSumandThird)
// }
// addAndSubtract(23, 6, 10)

function main(num1, num2, num3) {

    let sumFirstandSecond = sum(num1, num2)
    console.log(subtract(sumFirstandSecond, num3))
    function sum(num1, num2) {
        return num1 + num2;
    }
    function subtract(sumFirstandSecond, third) {
        return sumFirstandSecond - third
    }
}
main(23, 6, 10)
