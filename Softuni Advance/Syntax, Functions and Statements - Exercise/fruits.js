function fruits(type, grams, priceForKg) {
    let kg = grams / 1000;
    let money = kg * priceForKg;
    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}
fruits('orange', 2500, 1.80);