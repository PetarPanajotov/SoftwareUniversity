function coins (input) {
  let index = 0;

  let money = Number(input[index]);
  index++;

  coinCount = 0;
    while (money !== 0) {
        if (money >= 2.00) {
            money = Number((money - 2).toFixed(2));
            coinCount++;
            continue;
        }
        if (money >= 1.00) {
            money = Number((money - 1).toFixed(2));
            coinCount++;
            continue;
        }
        if (money >= 0.50) {
            money = Number((money - 0.50).toFixed(2));
            coinCount++;
            continue
        }
        if (money >= 0.20) {
            money = Number((money - 0.20).toFixed(2));
            coinCount++;
            continue;
        }
        if (money >= 0.10) {
            money = Number((money - 0.10).toFixed(2));
            coinCount++;
            continue;
        }
        if (money >= 0.05) {
            money = Number((money - 0.05).toFixed(2));
            coinCount++;
            continue;
        }
        if (money >= 0.02) {
            money = Number((money - 0.02).toFixed(2));
            coinCount++;
            continue;
        }
        if (money >= 0.01) {
            money = Number((money - 0.01).toFixed(2));
            coinCount++;
            continue;
        }
    }
    console.log (coinCount)
}
coins (["0.59"])