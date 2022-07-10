function numbers(arr) {
    let copyArr = arr.slice()
    let nums = copyArr.shift().split(" ").map(Number)

    let index = 0;
    let token = copyArr[index]

    while (token !== "Finish") {
        token = token.split(" ")
        let command = token.shift()
        switch (command) {
            case "Add":
                nums.push(Number(token[0]));
                break;
            case "Remove":
                let numToRemove = nums.indexOf(Number(token[0]))
                if (numToRemove > -1) {
                    nums.splice(numToRemove, 1)
                }
                break;
            case "Replace":
                let valueForReplace = nums.indexOf(Number(token[0]));
                let replacement = Number(token[1]);
                if (valueForReplace > -1) {
                    nums.splice(valueForReplace, 1, replacement)
                }
                break;
            case "Collapse":
                let comparasion = Number(token[0])
                nums = nums.filter(a => a >= comparasion);
                break;
        }
        index++
        token = copyArr[index]
    }
    console.log(nums.join(" "))
}
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"])