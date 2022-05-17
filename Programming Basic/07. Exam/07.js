function substitute (input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);

    let counter = 0;

    for (let i = K; i <= 8; i++) {
        for (let j =  9; j >= L; j--) { 
            for (let x1 = M; x1 <= 8; x1++) {
                for (let x2 = 9; x2 >= N; x2--) {                
                    if (i % 2 == 0 && j % 2 !== 0 && x1 % 2 == 0 && x2 % 2 !==0) {
                        if (i == x1 && j == x2) {
                            console.log(`Cannot change the same player.`)
                            counter++
                            continue;   
                        } else {
                            console.log (`${i}${j} - ${x1}${x2}`)
                            counter++
                        }
                    }
                } if (counter > 6) {
                    break;
                }
                
            }
                if (counter === 6) {
                    break;
                }
            }
            if (counter === 6) {
                break; 
        }
        if (counter === 6) {
            break;
        }
    }
}
substitute
(["6",
"7",
"5",
"6"])