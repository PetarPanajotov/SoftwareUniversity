function fancyBarcodes(input) {
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/gm
    let barcodestoCheck = Number(input.shift());
    let digitCheck = /\d+/gm

    let check;
    for (let i = 0; i < barcodestoCheck; i++) {
        let index = input.shift()
        if (index.match(pattern) !== null) {
            index = index.match(pattern).join("")
            check = index.match(digitCheck)
            if (check !== null) {
                console.log(`Product group: ${check.join("")}`)
            } else {
                console.log('Product group: 00')
            }
        } else {
            console.log(`Invalid barcode`)
        }
    }
}
fancyBarcodes((["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]))