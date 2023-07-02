function multipleTable (num) {
    for (let i = num; i <= num; i++) {
        for (let j = 1; j <= 10; j++) {
            let product = i * j;
            console.log (`${i} X ${j} = ${product}`)
        }
    }
}
multipleTable(5)