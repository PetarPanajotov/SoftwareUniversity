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
