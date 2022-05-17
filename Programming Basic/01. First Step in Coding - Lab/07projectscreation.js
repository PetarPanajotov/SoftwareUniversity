function Project(input) {
    let architectname = input[0];
    let numberofproject = Number(input[1]);
    let timeneeded = 3 * numberofproject;
    console.log (`The architect ${architectname} will need ${timeneeded} hours to complete ${numberofproject} project/s.`);
}
Project(['George' , '4']);