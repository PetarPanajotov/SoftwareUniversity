function sumSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length-1) {
        end = arr.length-1
    }
    result = arr.slice(start, end+1)
    sum = 0;
    for (let index of result) {
        if (isNaN(index)) {
            return NaN
        }
        sum+= index
    }
    return sum;
}
console.log(sumSum([10, 20, 30, 40, 50, 60], 3, 300))