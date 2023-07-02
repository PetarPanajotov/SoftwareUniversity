function cutandReverse(sentence) {
    let firstHalf = sentence.substring(0, sentence.length/2);
    let secondHalf = sentence.substring(sentence.length/2, sentence.length)
    let firstReverse = "";
    let secondReverse = "";
    for (let i = firstHalf.length-1; i >= 0; i--) {
        firstReverse += firstHalf[i]
    }
    for (let i = secondHalf.length-1; i >= 0; i--) {
        secondReverse += secondHalf[i]
    }
    console.log(firstReverse);
    console.log(secondReverse)

}
cutandReverse('tluciffiDsIsihTgnizamAoSsIsihT')