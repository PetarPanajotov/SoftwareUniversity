// This task is an extension of Problem 1, you may use your solution from that task as a base.

// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it. In addition to the input parameters, the object must have a property taxRate with an initial value of 10, and three methods for managing the city:

// · collectTaxes() - Increase treasury by population * taxRate

// · applyGrowth(percentage) - Increase population by given percentage

// · applyRecession(percentage) - Decrease treasury by given percentage

// Round down the values after each calculation.
function cityTaxes(name, population, treasury) {
    let city = {
        'name': name,
        'population': population,
        'treasury': treasury,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor((percentage * this.population)/100)
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor((percentage * this.treasury)/100)
        }
    }
    city['taxRate'] = 10;
    return city;
}
const city =

cityTaxes('Tortuga',

7000,

15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
