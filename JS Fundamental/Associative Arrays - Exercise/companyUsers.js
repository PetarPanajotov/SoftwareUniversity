function companyUsers(arr) {
    let obj = {};
    let result = {};
    let sortArr = []
    for (let index of arr) {
        index = index.split(" -> ")
        let [company, employee] = index;
        if (obj.hasOwnProperty(company)) {
            let oldWorker = obj[company]
            obj[company] = oldWorker + ", " + employee
        } else {
            obj[company] = employee
        }
    }
    for (let key in obj) {
        let set = new Set()
        let current = obj[key].split(", ")
        for (let index of current) {
            set.add(index)
        }
        for (let index of set) {
            if (result.hasOwnProperty(key)) {
                let oldresult = result[key]
                result[key] = oldresult + ", " + index;
            } else {
                result[key] = index;
            }
        }
    }
    for (let key in result) {
        sortArr.push(key)
    }
    sortArr = sortArr.sort((a, b) => a.localeCompare(b))
    for (let index of sortArr) {
       let split = result[index].split(", ")

            console.log(`${index}\n-- ${split.join("\n-- ")}`)
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])