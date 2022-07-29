function matchFullName(input) {
    let pattern = /\b[A-Z]{1}[a-z]{1,}\ {1}[A-Z]{1}[a-z]{1,}/gm
    let array = []
    while((validname = pattern.exec(input))!== null) {
        array.push(validname[0]);
    }
    console.log(array.join(" "))
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov")