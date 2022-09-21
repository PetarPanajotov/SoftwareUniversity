// 2. Town Population

// You have been tasked to create a registry for different towns and their population.

// Input

// The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"

// If you receive the same town twice, you should add the given population to the current one.

// Output

// As output, you must print all the towns and their population
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