function specialNumbers(number) {
    let x = 0;
    sum = 0;
    boolean = "";
    for (let i = 1; i <= number; i++) {
        let index = 0;
        i = String(i);
        for (let j = 0; j < i.length; j++) {
            x = i[index];
            x = Number(x);
            index++;
            sum += x;
            if (sum === 5 || sum === 7 || sum === 11) {
                boolean = "True";
            } else {
                boolean = "False";
            }
        }
        console.log (`${i} -> ${boolean}`)
        sum = 0;
    }
}
specialNumbers(20)