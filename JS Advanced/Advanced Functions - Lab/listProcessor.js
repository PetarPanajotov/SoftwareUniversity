function listProcessor(array) {
    let result = []
    let methodFuntion = innerObject()
    for (let index of array) {
        let [command,input] = index.split(' ');
        methodFuntion[command](input)
    }
    function innerObject() {
        return {
            add: (input) => result.push(input),  
            remove: (input) => {
                let reg = new RegExp(input, 'g')
                result = result.join('').replace(reg, "").split(' ')
                },
            print: () => console.log(result.join(','))
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])