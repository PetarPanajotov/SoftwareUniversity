function shopping (input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let gpu = gpuCount * 250;
    let cpu = (gpu * 0.35) * cpuCount;
    let ram = (gpu * 0.1) * ramCount;
    let price = gpu + cpu + ram;
    if (gpuCount > cpuCount) {
        price = price - (price * 0.15);    
    }
    let sum = Math.abs(price - budget);
    if (budget >= price) {
        console.log (`You have ${sum.toFixed(2)} leva left!`);
    } else {
        console.log (`Not enough money! You need ${sum.toFixed(2)} leva more!`)
    }
}
shopping (["920.45",
"3",
"1",
"1"])
