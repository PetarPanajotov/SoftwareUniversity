function numberpyramide (input) {
    let n = Number(input[0]);
    let counter = 1;
    let flag = false;
    let currentLine = "";


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (counter > n) {
                flag = true;
                break;
            }
            currentLine += counter + " ";
            counter++

        }
        console.log (currentLine);
        currentLine = "";
        if (flag) {
            break;
        }
    }
}
numberpyramide (["9"])