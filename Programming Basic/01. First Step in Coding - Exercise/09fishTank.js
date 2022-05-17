function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = lenght * width * heigth;
    let volumeLiters = volume * 0.001;
    let spaceTaken = percentage / 100;
    let litersNeeded = volumeLiters * (1 - spaceTaken);

    console.log (litersNeeded);
}
fishTank(["85" , "75" , "47" , "17"]);
fishTank(["105" , "77" , "89" , "18.5"]);