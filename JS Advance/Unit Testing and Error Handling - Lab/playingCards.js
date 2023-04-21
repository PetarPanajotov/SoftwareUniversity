// 2. Playing Cards

// Create a JS factory function that returns a Card object holding the card’s face and suit. Throw an error if the card is initialized with an invalid face.

// · Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// · Valid card suits are: S (♠), H (♥), D (♦), C (♣)

// Both face and suit are expected as an uppercase string. The object also needs to have a toString() method that prints the card’s face and suit as a string. Use the following UTF code literals to represent the suits:

// · \u2660 – Spades (♠)

// · \u2665 – Hearts (♥)

// · \u2666 – Diamonds (♦)

// · \u2663 – Clubs (♣)

// Input / Output

// The factory function takes two string parameters. The toString() method of the returned object must return a string
function cards(face, suit) {
    let validFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let valiSuit = ["S", "H", "D", "C"];
    let utfObj = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }
    if (!validFace.includes(face)) {
        throw new Error("Invalid face")
    }
    if (!valiSuit.includes(suit)) {
        throw new Error("Invalid suit")
    }
    let cardObj = {}
    cardObj["face"] = face;
    cardObj["suit"] = suit
    cardObj["toString"] = function () {
        let buff = `${this.face}${utfObj[this.suit]}`
        return buff;
    }
    return cardObj
}
console.log(cards("3", 'C').toString())
