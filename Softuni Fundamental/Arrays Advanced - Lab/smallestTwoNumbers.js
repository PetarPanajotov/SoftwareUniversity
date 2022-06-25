function smallestTwoNumbers(arr) {
    let sortedElements = arr.sort((a, b) => a - b)
                            .slice(0, 2);
    console.log(sortedElements.join(" "))
}
smallestTwoNumbers([30, 15, 50, 5])