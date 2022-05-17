function tradeCommisions (input) {
    let city = input[0];
    let sell = Number(input[1]);
    let commision = 0;
        if (sell >= 0 && sell <= 500) {
            switch (city) {
                case "Sofia": commision = 0.05; break;
                case "Varna": commision = 0.045; break;
                case "Plovdiv": commision = 0.055; break;
                default: console.log ("error"); break;
            }
        } else if (sell > 500 && sell <= 1000) {
            switch (city) {
                case "Sofia": commision = 0.07; break;
                case "Varna": commision = 0.075; break;
                case "Plovdiv": commision = 0.08; break;
                default: console.log ("error"); break;
            }
        } else if (sell > 1000 && sell <= 10000) {
            switch (city) {
                case "Sofia": commision = 0.08; break;
                case "Varna": commision = 0.10; break;
                case "Plovdiv": commision = 0.12; break;
                default: console.log ("error"); break;
            }
        } else if  (sell > 10000) {
            switch (city) {
                case "Sofia": commision = 0.12; break;
                case "Varna": commision = 0.13; break;
                case "Plovdiv": commision = 0.145; break;
                default: console.log ("error"); break;
            }
        } else {
            console.log ("error");
        }
        if (commision != 0) {
            commision = sell * commision;
            console.log (commision.toFixed(2));
        }
}
tradeCommisions (["Varna",
"-66"])



