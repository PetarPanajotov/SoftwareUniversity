// Write a function that takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated). Use the solution from the previous task to generate the cards.

// Print `Invalid card: ${card}` when an invalid card definition is passed as input.

// Input / Output

// The function takes an array of strings as a parameter. Print the list of cards as string, separated by space.
function printDeckOfCards(cards) {
    let buffOuter = "";
    let boolean = true;
    function createCard(face, suit) {
        let validFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let validSuit = ["S", "H", "D", "C"];
        let utfObj = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        }
        if (!validFace.includes(face) || !validSuit.includes(suit)) {
            return false
        }
        let cardObj = {}
        cardObj["face"] = face;
        cardObj["suit"] = suit
        cardObj["toString"] = function () {
            let buff = `${this.face}${utfObj[this.suit]} `
            return buff;
        }
        return cardObj
        // Use the solution from the previous task
    }
    for (let card of cards) {
        let face = "";
        let suit = "";
        if (card.length === 2) {
            [face,suit] = card.split("");
        } else {
            face = card.substring(0, 2)
            suit = card.substring(2, card.length)
        }
        if (!createCard(face, suit)) {
            console.log(`Invalid card: ${face}${suit}`)
            return;
        }
        buffOuter += createCard(face, suit).toString()
    }
    console.log(buffOuter.trimEnd())
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])