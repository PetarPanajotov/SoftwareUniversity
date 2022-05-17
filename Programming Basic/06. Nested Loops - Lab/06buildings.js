function buildings (input) {
    let index = 0;

    let floors = Number(input[index])
    index++;

    let spaces = Number(input[index]);
    index++;

    
    for (let i = floors; i >= 1; i--) {
        let oneFloor = "";
        for (let j = 0; j < spaces; j++){
            if (i === floors) {
                oneFloor = oneFloor + `L${i}${j} `
            }
            if (i % 2 === 0 && i !== floors) {
                oneFloor = oneFloor + `O${i}${j} `
            }
            if (i % 2 !== 0 && i !== floors) {
                oneFloor = oneFloor + `A${i}${j} `
            }
        }
        console.log(oneFloor)
    }

}
buildings(["4" , "4"])