// function filterEmployees(data, criteria) {
//     data = JSON.parse(data);
//     criteria = criteria.split('-');
//     let counter = 0;
//     for (let input of data) {
//         if (input[criteria[0]] === criteria[1]) {
//             console.log(`${counter}. ${input.first_name} ${input.last_name} - ${input.email}`)
//             counter++
//         }
//     }

// }
function solve(data, criteria) {

    let [prefix, value] = criteria.split('-');

    let counter = 0;



    JSON.parse(data).forEach(person => selectByCriteria.call(person));



    function selectByCriteria() {

        if (this[prefix] === value || criteria === 'all') {

            return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);

        }

    }

}
solve(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,

    'gender-Female')