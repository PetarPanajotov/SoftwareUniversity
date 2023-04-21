function sortArr(arr, sort) {
    let mySort = mySortf()
    function mySortf() {
        return {
            asc: (arr) => arr.sort((a,b) => a-b),
            desc: (arr) => arr.sort((a,b) => b-a)
        }
    }
    return mySort[sort](arr)
}
sortArr([14, 7, 17, 6, 8], 'desc')