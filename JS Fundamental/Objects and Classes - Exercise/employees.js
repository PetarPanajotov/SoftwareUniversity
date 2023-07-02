function employees (arr) {
    let data = {
        'Name': undefined,
        'Personal Number': undefined
    };
    for (let index of arr) {
        data.Name = index
        data['Personal Number'] = index.length
        console.log(`Name: ${data['Name']} -- Personal Number: ${data['Personal Number']}`)
    }
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])