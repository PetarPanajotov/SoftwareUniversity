function palindromeInteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let converttoString = String(num)
        let boolean = false;
        let numLength = converttoString.length
        for (let j = 0; j <= numLength; j++) {
            let start = converttoString.charAt(j)
            let end = converttoString.charAt(numLength - j - 1);
            if (start === end) {
                boolean = true
            } else {
                boolean = false
                break;
            }
        }
        if (boolean) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeInteger([32, 2, 232, 1010])