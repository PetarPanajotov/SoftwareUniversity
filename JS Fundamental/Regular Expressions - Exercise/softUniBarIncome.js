function softUniBar (input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g
    input = input.join("")
    let totalSum = 0;
    while ((valid = pattern.exec(input)) !== null) {
        let name = valid.groups['customer']
        let product = valid.groups['product']
        let quantity = Number(valid.groups['quantity'])
        let price = Number(valid.groups['price'])
        let sum = price * quantity;
        console.log(`${name}: ${product} - ${sum.toFixed(2)}`)
        totalSum += sum
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`)
}
softUniBar(['%InvalidName%<Croissant>|2|10.3$',

'%Peter%<Gum>1.3$',

'%Maria%<Cola>|1|2.4',

'%Valid%<Valid>valid|10|valid20$',

'end of shift'])