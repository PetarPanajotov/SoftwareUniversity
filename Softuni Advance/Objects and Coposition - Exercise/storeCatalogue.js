// You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order.

// Input

// The input comes as an array of strings. Each element holds info about a product in the following format:

// "{productName} : {productPrice}"

// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
function storeCatalogue(arr) {
    let sortedArr = arr.sort((a,b) => a.localeCompare(b))
    let result = {};
    for (let index of arr) {
        let splitted = index.split(' : ');
        let [product, price] = splitted;
        result[product] = price;
    }
    let keys = Object.keys(result);
    for (let i = 0; i < keys.length; i++) {
        let previous = 0;
        if (i !== 0) {
        previous = keys[i-1][0];
        }
        let current = keys[i][0];
        if (previous !== current) {
            console.log(current);
        }
        console.log(`  ${keys[i]}: ${result[keys[i]]}`);
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
