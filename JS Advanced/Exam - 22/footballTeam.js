class footballTeam {
    constructor(clubName, country) {
        this.clubName = String(clubName);
        this.country = String(country);
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        for (let currentPlayer of footballPlayers) {
            let [name, age, playerValue] = currentPlayer.split('/');
            playerValue = Number(playerValue);
            age = Number(age);
            let currentName = this.invitedPlayers.find(element => element.name === name)
            if (currentName) {
                if (currentName.playerValue < playerValue) {
                    currentName.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({
                    name: name,
                    age: age,
                    playerValue: playerValue
                })
            }
        }
        let tempNames = [];
        for (let index of this.invitedPlayers) {
            tempNames.push(index.name)
        }
        return `You successfully invite ${tempNames.join(', ')}.`
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer)
        let currentName = this.invitedPlayers.find(element => element.name === name);
        if (!currentName) {
            throw new Error (`${name} is not invited to the selection list!`)
        }
        if (playerOffer < currentName.playerValue) {
            let priceDifference = Math.abs(playerOffer - currentName.playerValue)
            throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }
        currentName.playerValue = 'Bought'
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        let currentName = this.invitedPlayers.find(element => element.name === name);
        if (!currentName) {
            throw new Error (`${name} is not invited to the selection list!`)
        }
        if (currentName.age < age) {
            let ageDifference = age - currentName.age;
            if(ageDifference < 5 && ageDifference > 0) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else if (ageDifference >= 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }
    }
    transferWindowResult() {
        let buff = "Players list:\n"
        this.invitedPlayers.sort((a,b) => a.name -b.name)
        for (let index of this.invitedPlayers) {
            buff += `Player ${index.name}-${index.playerValue}\n`
        }
        return buff.substring(0, buff.length-1)
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));




