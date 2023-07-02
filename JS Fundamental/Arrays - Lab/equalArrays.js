function equalArrays(firstArr, secondArr) {
    let firstIndex;
    let secondIndex;
    let sum = 0;
    let counter = 0;
    let boolean;
    for (let i = 0; i < firstArr.length; i++) {
        firstIndex = Number(firstArr[i]);
        for(let j = i; j < secondArr.length; j++) {
            secondIndex = Number(secondArr[j]);
            if (firstIndex === secondIndex) {
                boolean = true;
                sum += firstIndex;
            } else {
                counter = j;
                boolean = false;
            }
            break;   
        }  
        if (!boolean) {
            console.log (`Arrays are not identical. Found difference at ${counter} index`)
            return;
        } 
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])