function salary (input) {
    let index = 0

    let n = Number(input[index]);
    index++

    let salary = Number(input[index]);
    index++

    let fine = 0;
    let facebookCounter = 0;
    let instagramCounter = 0;
    let RedditCounter = 0;
    let money = 0;
    
    let isMoneyLeft = true;

    for (let i = 0; i <= n; i++) {
        let tabs = input[index];
        index++
        switch (tabs) {
            case "Facebook":
                facebookCounter++;
                break;
            case "Instagram":
                instagramCounter++
                break;
            case "Reddit":
                RedditCounter++
                break;
        }
        fine = 150 * facebookCounter + 100 * instagramCounter + 50 * RedditCounter;
        if (fine >= salary) {
           isMoneyLeft = false
            break;
        } else {
            money = salary - fine
        }
    }
    if (!isMoneyLeft) {
        console.log (`You have lost your salary.`)
    } else {
        console.log (money)
    }
}
salary (["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



