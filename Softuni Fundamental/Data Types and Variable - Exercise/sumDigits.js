function sumDigits (num) {
    let sum = 0
    num = String(num);
    for (let i = 0; i < num.length; i++) {
        let currentNum = num.charAt(i);
        currentNum = Number(currentNum)
        sum += currentNum;
        
    }
    console.log(sum)
}
sumDigits(245678)