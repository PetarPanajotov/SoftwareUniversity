function passwordReset(input) {
    let password = input.shift();
    let tokens = input.shift().split(" ");
    let passwordArr = [];
    while(tokens[0] !== "Done") {
        let command = tokens.shift();
        let firstToken = tokens.shift();
        let secondToken = tokens.shift();
        switch(command) {
            case "TakeOdd":
                for (let i = 1; i < password.length; i += 2) {
                    passwordArr.push(password[i])
                }
                password = passwordArr.join("")
                console.log(password)
            break;
            case "Cut":
                firstToken = Number(firstToken);
                secondToken = Number(secondToken);
                let firstHalfofPassword = password.substring(0, firstToken)
                let secondHalfofPassword = password.substring(firstToken+secondToken, password.length);
                password = firstHalfofPassword+secondHalfofPassword
                console.log(password)
            break;
            case "Substitute":
                if (password.includes(firstToken)) {
                    let replacement = new RegExp(firstToken, "g");
                    password = password.replace(replacement, secondToken)
                    console.log(password)
                } else {
                    console.log("Nothing to replace!")
                }
            break;
        }
        tokens = input.shift().split(" ")
    }
    console.log(`Your password is: ${password}`)
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
);