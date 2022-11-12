class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        });
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(element => element.plantName === plantName);
        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity < 1) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        currentPlant.ripe = true;
        currentPlant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName) {
        let currentPlant = this.plants.find(element => element.plantName === plantName);
        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let storagePlantName = currentPlant.plantName;
        let storagePlantQuantity = currentPlant.quantity;
        this.spaceAvailable += currentPlant.spaceRequired
        this.plants = this.plants.filter(element => element !== currentPlant)
        this.storage.push({
            plantName: storagePlantName,
            quantity: storagePlantQuantity
        });
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let buffer = ""
        buffer += `The garden has ${this.spaceAvailable} free space left.\n`;
        let tempArr = [];
        for (let index of this.plants) {
            tempArr.push(index.plantName)
        }
        buffer += `Plants in the garden: ${tempArr.join(', ')}\n`;
        if (this.storage.length < 1) {
            buffer += "Plants in storage: The storage is empty."
        } else {
            buffer += "Plants in storage: "
            for (let index of this.storage) {
                buffer += index.plantName + " "
                buffer += `(${index.quantity})` + ", "
            }
            buffer = buffer.substring(0, buffer.length - 2)
        }
        return buffer
    }
}
const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 200));

console.log(myGarden.addPlant('raspberry', 10));

console.log(myGarden.ripenPlant('apple', 10));

console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.harvestPlant('orange'));

console.log(myGarden.generateReport());