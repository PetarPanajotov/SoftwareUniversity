function examPreparation (input) {
    let index = 0;
    let unsatisfactory = Number(input[index]);
    index++;

    let problem = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let unsatisfactoryCount = 0;

    let flag = true;
    let gradeCounter = 0;
    let sumGrade = 0;

    while (problem !== "Enough") {
        gradeCounter++;
        if (grade <= 4) {
            unsatisfactoryCount++;
        }
        if (unsatisfactoryCount === unsatisfactory) {
            console.log (`You need a break, ${unsatisfactory} poor grades.`);
            flag = false;
            break;
        }
        sumGrade += grade

        problem = input[index];
        index++;

        grade = Number(input[index]);
        index++;
    }
    if (flag === true) {
        let averagegrade = sumGrade / gradeCounter;
        index -= 4
        problem = input[index]
         console.log (`Average score: ${averagegrade.toFixed(2)}`);
         console.log (`Number of problems: ${gradeCounter}`);
         console.log (`Last problem: ${problem}`);    
    }
}
examPreparation (["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

