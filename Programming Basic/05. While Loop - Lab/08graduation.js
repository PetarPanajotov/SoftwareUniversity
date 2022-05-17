function graduation (input) {
    let index = 0;
    let name = input[index];
    index++;

    let average = 0;
    let gradeCounter = 0;
    let weakGradeCounter = 0

    let Isgraduated = true

    while(index < input.length) {
        let grade = Number(input[index])
        if (grade < 4) {
            weakGradeCounter++;
        }
        if (weakGradeCounter > 1) {
            console.log (`${name} has been excluded at ${gradeCounter} grade`);
            Isgraduated = false;
            break;
        }
        gradeCounter++
        average += grade
        index++
    }
    average = average / gradeCounter;
    if (Isgraduated) {
        console.log (`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
}
graduation (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


