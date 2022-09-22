// You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The Latitude and Longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
function townstoJSON (arr) {
    let resultObj = [];
    let tableProp = arr.shift().split(" | ")
    let table = [];
    for (let prop of tableProp) {
        prop = prop.replace(" |", "").replace("| ", "")
        table.push(prop);
    }
    for(let index of arr) {
        let splitted = index.split(' | ');
        let [town, latit, longi] = splitted;
        town = town.replace("| ", "");
        longi = longi.replace(" |", "");
        resultObj.push({
            [table[0]]: town,
            [table[1]]: Math.round((Number(latit) + Number.EPSILON) * 100) / 100,
            [table[2]]: Math.round((Number(longi) + Number.EPSILON) * 100) / 100,
        })
    }
    console.log(JSON.stringify(resultObj))
}
townstoJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)