function sumofNumbers(m,n) {
    m = Number(m);
    n = Number(n);
    let sum = 0;
    for(let i = m; i <= n; i++) {
        sum+=i
    }
    return sum;
}
sumofNumbers('1', '5')