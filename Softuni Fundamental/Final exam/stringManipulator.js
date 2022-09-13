function stringManipulator (input) {
    let string = input.shift();
    let tokens = input.shift().split(" ");
    while (tokens[0] !== "End") {
        let command = tokens.shift();
        let firstToken = tokens.shift();
        let secondToken = tokens.shift();
        switch(command) {
            case "Translate":
                let regex = new RegExp(firstToken, "g");
                string = string.replace(regex, secondToken)
                console.log(string);
            break;
            case "Includes":
                let includes = string.includes(firstToken);
                if (!includes) {
                    console.log('False')
                } else {
                    console.log('True')
                }
            break;
            case "Start":
                let start = string.startsWith(firstToken)
                if (!start) {
                    console.log('False')
                } else {
                    console.log('True')
                }
            break;
            case "Lowercase":
                string = string.toLowerCase();
                console.log(string);
            break;
            case "FindIndex":
                let findIndex = string.lastIndexOf(firstToken)
                console.log(findIndex);
            break;
            case "Remove":
                firstToken = Number(firstToken);
                secondToken = Number(secondToken);
                let firstHalf = string.substring(0,firstToken);
                let secondHalf = string.substring(secondToken+firstToken, string.length);
                string = firstHalf+secondHalf;
                console.log(string)
            break;
        } 
        tokens = input.shift().split(" ");
    }
}
console.log(`---------------------`)
stringManipulator((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
)