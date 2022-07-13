function storeProvision(stock, order) {
    let products = {};
    for (let input = 0; input < stock.length; input+= 2) {
        products[stock[input]] = Number(stock[input+1]);
    }
    for (let input = 0; input < order.length; input+= 2) {
        let nameOrder = order[input];
        let quantityOrder = Number(order[input+1])
        let boolean = true
        for (let key of Object.keys(products)) {
            if (key === nameOrder) {
                let sum = products[nameOrder] + quantityOrder;
                products[nameOrder] = sum
                boolean = false
            }
        }
        if (boolean) {
            products[nameOrder] = quantityOrder;
        }
    }
    for (let prop in products) {
        console.log(`${prop} -> ${products[prop]}`)
    }
}
storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])