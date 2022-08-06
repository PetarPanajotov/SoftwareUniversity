function worldTour (input) {
    let worldTravel = input.shift()
    let tokens = input.shift().split(":")

    while(tokens[0] !== "Travel") {
        let command = tokens[0];
        let firstToken = tokens[1];
        let secondToken = tokens[2];
        switch(command) {
            case "Add Stop":
                firstToken = Number(firstToken);
                if (firstToken >= 0 && firstToken < worldTravel.length) {
                    let firstHalf = worldTravel.substring(0, firstToken) + secondToken;
                    let secondHalf = worldTravel.substring(firstToken, worldTravel.length);
                    worldTravel = firstHalf+secondHalf;
                }
                console.log(worldTravel)
                break;
            case "Remove Stop":
                firstToken = Number(firstToken);
                secondToken = Number(secondToken);
                if(firstToken >= 0 && secondToken >= 0 && firstToken < worldTravel.length && secondToken < worldTravel.length) {
                    let firstHalf = worldTravel.substring(0, firstToken)
                    let secondHalf = worldTravel.substring(secondToken+1, worldTravel.length)
                    worldTravel = firstHalf+secondHalf;
                }
                console.log(worldTravel)
                 break;
            case "Switch":
                let regex = new RegExp(firstToken, 'g');
                if (worldTravel.includes(firstToken)) {
                    worldTravel = worldTravel.replace(regex, secondToken)
                }
                console.log(worldTravel)
                 break;
        }
        tokens = input.shift().split(":")
    }
    console.log(`Ready for world tour! Planned stops: ${worldTravel}`)
}
worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel',
    ''
  ])