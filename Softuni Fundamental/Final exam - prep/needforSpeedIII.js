function nfs(input) {
    let numberofCars = Number(input.shift());
    let carObj = {};
    for(let i = 0; i < numberofCars; i++) {
        let car = input.shift().split("|");
        carObj[car[0]] = [];
        carObj[car[0]].push(car[1], car[2]);
    }
    let tokens = input.shift().split(" : ")
    while(tokens[0] !== "Stop") {
        let command = tokens.shift();
        let car = tokens.shift();
        let firstToken = Number(tokens.shift());
        let secondToken = Number(tokens.shift());
        let currentCarInfo = carObj[car];
        let currentCarMillage = Number(currentCarInfo[0]);
        let currentCarFuel = Number(currentCarInfo[1]);
        let boolean = true;
        switch(command) {
            case "Drive": 
                    let millage = currentCarMillage + firstToken;
                    if (currentCarFuel < secondToken) {
                        console.log(`Not enough fuel to make that ride`);
                        break;
                    } else {
                        currentCarFuel = currentCarFuel - secondToken;
                        currentCarInfo.pop();
                        currentCarInfo.push(currentCarFuel);
                        console.log(`${car} driven for ${firstToken} kilometers. ${secondToken} liters of fuel consumed.`);
                        currentCarInfo.shift();
                        currentCarInfo.unshift(millage);
                    }
                    if (millage >= 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete carObj[car];
                        boolean = false;
                    }
            break;
            case "Refuel": 
                let refuel = firstToken + currentCarFuel;
                if (refuel > 75) {
                    refuel = 75 -  currentCarFuel;
                    firstToken = refuel;
                    currentCarInfo.pop();
                    currentCarInfo.push(75);
                } else {
                    currentCarInfo.pop();
                    currentCarInfo.push(refuel);
                }
                console.log(`${car} refueled with ${firstToken} liters`);
            break;
            case "Revert":
                currentCarMillage = currentCarMillage - firstToken;
                if (currentCarMillage > 10000) {
                    console.log(`${car} mileage decreased by ${firstToken} kilometers`)
                } else {
                    currentCarMillage = 10000
                }
                currentCarInfo.shift()
                currentCarInfo.unshift(currentCarMillage)
                break;
        }
        if (boolean) {
        carObj[car] = currentCarInfo
        }
        tokens = input.shift().split(" : ")
    }
    for (let [k, v] of Object.entries(carObj)) {
        console.log(`${k} -> Mileage: ${v[0]} kms, Fuel in the tank: ${v[1]} lt.`)
    }
}
nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]  
  )