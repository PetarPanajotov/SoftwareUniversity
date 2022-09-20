function townPopulation(arg) {
    let townPopulationObj = {};
    arg.forEach(element => {
        element = element.split(' <-> ');
        let [city, population] = element;
        if (townPopulationObj.hasOwnProperty(city)) {
            let previous = Number(townPopulationObj[city]);
            return townPopulationObj[element[0]] = previous + Number(population);   
        } else {
            return townPopulationObj[city] = population; 
        }
    });
    for (let city in townPopulationObj) {
    console.log(city, ':', townPopulationObj[city]);
    }
}
townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);