function exam (input) {
    let index = 0;
    let numStudents = Number(input[index]);
    index++;

    let grade = Number(input[index]);
    index++;

    let grade1Counter = 0;
    let grade2Counter = 0;
    let grade3Counter = 0;
    let grade4Counter = 0;
    let gradeaverage = 0

    for (let i = 1; i <= numStudents; i++) {
        if (grade >= 5.00) {
            grade1Counter++;
        } else if (grade >= 4.00 && grade < 5.00) {
            grade2Counter++;
        } else if (grade >= 3.00 && grade < 4) {
            grade3Counter++;
        } else if (grade < 3) {
            grade4Counter++;
        }
        gradeaverage += grade
        grade = Number(input[index]);
        index++
    }
    let group1Stundets = grade1Counter / numStudents * 100;
    let group2Stundets = grade2Counter / numStudents * 100;
    let group3Stundets = grade3Counter / numStudents * 100;
    let group4Students = grade4Counter / numStudents * 100;
    gradeaverage = gradeaverage / numStudents;
    console.log(`Top students: ${group1Stundets.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${group2Stundets.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${group3Stundets.toFixed(2)}%`)
    console.log(`Fail: ${group4Students.toFixed(2)}%`)
    console.log(`Average: ${gradeaverage.toFixed(2)}`)   
}
exam ([
"10" ,
"3.00" ,
"2.99" ,
"5.68" ,
"3.01" ,
"4" ,
"4" ,
"6.00" ,
"4.50" ,
"2.44" ,
"5" ,
])