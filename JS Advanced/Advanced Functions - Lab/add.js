function solution(num) {
    return function (secondNUm) {
        return num + secondNUm;
  }
}
let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));