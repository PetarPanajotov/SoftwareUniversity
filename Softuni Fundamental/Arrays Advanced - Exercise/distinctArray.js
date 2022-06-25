function distrinctArray(arr) {
//     let copyArr = arr.slice()
//     let resultArr = []
//     for (let i = 0; i < copyArr.length; i++) {
//         let currentNum = arr[i];
//         for (let j = copyArr.length - 1; j > i; j--) {
//             let comparedNum = copyArr[j]
//             if (currentNum === comparedNum) {
//                 copyArr.splice(j,1)
//             }
//         }
//     }
//     console.log(copyArr.join(" "))
// }
    let resultArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!resultArr.includes(arr[i])) {
            resultArr.push(arr[i])
        }
    }
    console.log(resultArr.join(" "))
}
distrinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])