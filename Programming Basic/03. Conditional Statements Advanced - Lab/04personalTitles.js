function personalTitles (input) {
    let age = Number(input[0]);
    let sex = input[1];
    if (age >= 16) {
        if (sex === "f"){
            console.log("Ms.");
        } else {
            console.log("Mr.");
        }
    } else {
        if (sex === "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    }
}
personalTitles (["13.5",
"m"])



