function oldBooks (input) {
    let index = 0;
    let book = input[index];
    index++;

    let search = input[index];
    index++;

    counter = 0;
    let didYouFoundIt = false

    while (search !== "No More Books") {
        if (search === book) {
            didYouFoundIt = true
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
        counter++;
        search = input[index]
        index++
    }
    if (didYouFoundIt === false) {
        console.log (`The book you search is not here!`)
        console.log (`You checked ${counter} books.`)
    }
}
oldBooks (["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


