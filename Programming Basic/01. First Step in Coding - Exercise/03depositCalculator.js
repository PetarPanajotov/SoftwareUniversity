function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let interest = Number(input[2]); // лихвата в проценти;
    let interestInNumber = interest/100;
    let sum = depositSum + depositTerm * ((depositSum * interestInNumber)/12);

    console.log (sum);
}
depositCalculator (["200" , "3" , "5.7"]);
depositCalculator (["2350" , "6" , "7"]);