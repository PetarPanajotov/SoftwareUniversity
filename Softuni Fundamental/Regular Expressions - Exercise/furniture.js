function furniture (input) {
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[0-9]*[.]?[0-9]+)!(?<quantity>[0-9]+)/g
    let text = input.join(' ')
    let sum = 0;
    let validFurnitures = []
    while((validFurniture = pattern.exec(text)) !== null) {
        validFurnitures.push(validFurniture);
    }
    console.log("Bought furniture:")
    for (let index of validFurnitures) {
        let furniture = index.groups['furniture'];
        console.log(furniture)
        let price = Number(index.groups['price']);
        let quantity = Number(index.groups['quantity']);
        sum += quantity * price
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`)
}
furniture(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])