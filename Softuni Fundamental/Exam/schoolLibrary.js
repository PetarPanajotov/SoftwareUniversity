function schoolLibrary (arr) {
    let copyArr = arr.slice();
    let shelf = copyArr.shift()
                        .split("&")
    let index = 0;
    let token = copyArr[index]

    while(token !== "Done") {
        token = token.split(" | ")
        let command = token.shift();
        let book = token[0]
        let book2 = token[1]

        switch (command) {
            case "Add Book": 
                let isTheBookThere = shelf.indexOf(book)
                if (isTheBookThere === -1) {
                    shelf.unshift(book)
                }   
            break;
            case "Take Book":
                let bookToTake = shelf.indexOf(book)
                if(bookToTake > - 1) {
                    shelf.splice(bookToTake, 1)
                }
            break;
            case "Swap Books":
                let bookToSwap1 = shelf.indexOf(book)
                let bookToSwap2 = shelf.indexOf(book2)
                if (bookToSwap1 > -1 && bookToSwap2 > -1) {
                    shelf.splice(bookToSwap1, 1, book2)
                    shelf.splice(bookToSwap2, 1, book)
                }
            break;
            case "Insert Book":
                let bookToInsertIsThere = shelf.indexOf(book);
                if (bookToInsertIsThere === -1) {
                    shelf.push(book);
                }
            break;
            case "Check Book":
                let bookIndexToCheck = Number(book)
                if (bookIndexToCheck < shelf.length && bookIndexToCheck >= 0) {
                    console.log(shelf[bookIndexToCheck])
                }
            break;
            
        }
        index++
        token = copyArr[index]
    }
    console.log(shelf.join(", "))
}
schoolLibrary((["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
)


