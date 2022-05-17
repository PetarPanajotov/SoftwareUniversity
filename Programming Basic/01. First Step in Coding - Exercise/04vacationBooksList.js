function vacationBookList (input) {

    let bookPages = Number([input[0]]);
    let pagesPerHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let pagesReadForOneDay = bookPages / pagesPerHour;
    let hoursPerDay = pagesReadForOneDay / daysNeeded;
    
    console.log(hoursPerDay)

}
vacationBookList(["212" , "20" , "2"]);
vacationBookList(["432" , "15" , "4"]);