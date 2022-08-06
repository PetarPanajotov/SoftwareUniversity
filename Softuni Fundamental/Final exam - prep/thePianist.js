function thePianist(input) {
    let pianoObj = {};
    let numofPieces = input.shift();
    for(let i = 0; i < numofPieces; i++) {
        let token = input.shift().split("|");
        let piece = token.shift()
        pianoObj[piece] = token
    }
    let token = input.shift().split("|");
    while(token[0] !== "Stop") {
        let command = token.shift();
        let piece = token.shift();
        let firstManipulation = token.shift();
        let secondManipulation = token.shift();
        switch(command) {
            case "Add":
                if (pianoObj.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`)
                } else {
                    pianoObj[piece] = [];
                    pianoObj[piece].push(firstManipulation)
                    pianoObj[piece].push(secondManipulation)
                    console.log(`${piece} by ${firstManipulation} in ${secondManipulation} added to the collection!`)
                }
                 break;
            case "Remove":
                if (pianoObj.hasOwnProperty(piece)) {
                    delete pianoObj[piece]
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
            case "ChangeKey": 
                if(pianoObj.hasOwnProperty(piece)) {
                    let checkpoint = pianoObj[piece]
                    checkpoint = checkpoint[0]
                    pianoObj[piece] = [];
                    pianoObj[piece].push(checkpoint)
                    pianoObj[piece].push(firstManipulation)
                    console.log(`Changed the key of ${piece} to ${firstManipulation}`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
            break;
        }
        token = input.shift().split("|") 
    }
    for (let [k,v] of Object.entries(pianoObj)) {
        console.log(`${k} -> Composer: ${v[0]}, Key: ${v[1]}`)
    }
}
thePianist([

    '3',
    
    'Fur Elise|Beethoven|A Minor',
    
    'Moonlight Sonata|Beethoven|C# Minor',
    
    'Clair de Lune|Debussy|C# Minor',
    
    'Add|Sonata No.2|Chopin|B Minor',
    
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    
    'Add|Fur Elise|Beethoven|C# Minor',
    
    'Remove|Clair de Lune',
    
    'ChangeKey|Moonlight Sonata|C# Major',
    
    'Stop'
    
    ])