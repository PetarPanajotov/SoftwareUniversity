function trainTheTrainers(input) {
    let index = 0;

    let people = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let gradeCounter = 0

    while (command !== "Finish") {
        let name = command;
        counter++;
        let sumGrade = 0;
        for (let i = 0; i < people; i++){
            let grade = Number(input[index]);
            index++;
            sumGrade += grade;
        }
        let tempAvarageGrade = sumGrade / people;
        console.log (`${name} - ${tempAvarageGrade.toFixed(2)}.`);
        gradeCounter += tempAvarageGrade;
        
        command = input[index];
        index++
    }
    let final = gradeCounter / counter
    console.log (`Student's final assessment is ${final.toFixed(2)}.`);
}
trainTheTrainers (["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
