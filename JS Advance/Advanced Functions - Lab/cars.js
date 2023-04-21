function cars(input) {
    let result = {};
    let car = carFunctions()
    for (let index of input) {
        index = index.split(' ');
        if (index[2] === 'inherit') {
            let command = index[2]
            car[command](index[1], index[3])
        } else {
            let [command, name, key, value] = index;
            car[command](name, key, value)

        }
    }
    function carFunctions() {
        return {
            create: name => result[name] = {},
            set: (name, key, value) => {
                result[name][key] = value;
            },
            inherit: (name, parentName) => {
                result[name] = Object.assign({}, result[parentName])
                JSON.stringify(JSON.parse(result[parentName])
            },
            print: name => {
                let toPrint = result[name]
                let propertiesObj = Object.entries(toPrint)
                console.log(propertiesObj.join(' '))
            }
        }
    }
}
cars(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])