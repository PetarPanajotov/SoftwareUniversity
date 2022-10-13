// 1. Sub Sum

// Write a function to sum a range of numeric elements from an array.

// The function takes three parameters - the first is an array, the second is the start index and the third is the end index. Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast everything. Implement the following error handling:

// · If the first element is not an array, return NaN

// · If the start index is less than zero, consider its value to be a zero

// · If the end index is outside the bounds of the array, assume it points to the last index of the array

// Input / Output

// Your function must take three parameters. As output, return the sum.
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