function tickets(arr, sortCriteria) {
    let sortFunctions = {
        destination: (arr) => arr.sort((a,b) => a[0].localeCompare(b[0])),
        price: (arr) => arr.sort((a,b) => Number(a[1]) - Number(b[1])),
        status: (arr) => arr.sort((a,b) => a[2].localeCompare(b[2]))
    }
    let result = []
    class Ticket {
        constructor(arr) {
            [this.destination, this.price, this.status]  = arr;
            this.price = Number(this.price)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let index = arr.pop();
        index = index.split('|')
        arr.unshift(index)
        
    }
    let sortedArr = sortFunctions[sortCriteria](arr)
    for (let currentArr of sortedArr) {
        result.push(new Ticket (currentArr))
    }
    return result
}
console.log(tickets(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'price')[0])