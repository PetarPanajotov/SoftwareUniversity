function substitute (input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);

    for (let i = K; i <= 8; i++) {
        for (let j = L; j <= 9; j++) { 
            for (let x1 = M; x1 <= 8; x1++) {
                for (let x2 = N; x2 <= 9; x2++) {
                    if (i % 2 != 0 || x1 % 2 != 0) {
                        if (j % 2 == 0 || x2 % 2 == 0) {
                            console.log (`Cannot change the same player.`)
                        }
                    } else {
                        console.log (`${i}${j} - ${x1}${x2}`)
                    }
                    if (i == x1 && j == x2) {
                        console.log(`Cannot change the same player.`)
                        continue
                    }
                }
            }
        }
    }
}
substitute
(["7",
"6",
"8",
"5"])
