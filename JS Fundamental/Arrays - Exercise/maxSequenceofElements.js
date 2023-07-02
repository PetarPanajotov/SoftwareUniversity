function maxSequenceofElements (arr) {
    let streak = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        for(let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tempArr.push(arr[i]);
            } else {
                break;
            }
        }
        if (tempArr.length > streak.length) {
            streak = tempArr;   
        }   
    }
    console.log(streak.join(' '))
}
maxSequenceofElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])