function login(input) {
    let index = 0;
    let counter = 1;

    let userLogin = input[index];
    let reverseLogin = userLogin;
    index++

    let newLogin = input[index]

    reverseLogin = reverseLogin.split("").reverse().join("").split(" ").reverse().join(" ")
    if (newLogin === reverseLogin) {
        console.log (`User ${userLogin} logged in.`)
        return
    }
    while(newLogin !== reverseLogin) {
        console.log("Incorrect password. Try again.")

        index++
        counter++
        newLogin = input[index]
        if (newLogin === reverseLogin) {
            console.log (`User ${userLogin} logged in.`)
            return
        }
        if (counter === 4) {
            console.log (`User ${userLogin} blocked`)
            return
        }
    }
}
login(['momo','omom'])