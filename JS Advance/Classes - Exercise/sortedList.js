class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }
    add(num) {
        this.size++
        this.arr.push(num);
        return this.arr.sort((a,b) => a-b)
    }
    remove(index) {
        if(index < 0 || index >= this.arr.length) {
            throw new Error ('Incorrect index')
        }
        this.size--
        return this.arr.splice(index, 1);
    }
    get(index) {
        if(index < 0 || index >= this.arr.length) {
            throw new Error ('Incorrect index')
        }
        return this.arr[index];
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(1);
console.log(list.get(1));
list.remove(1);
console.log(list.get(2));
console.log(list.hasOwnProperty('size'))