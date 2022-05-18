function excellentGrade (grade) {
    grade = Number(grade);
    if (grade >= 5.50 && grade <= 6) {
        console.log(`Excellent`);
    } else {
        console.log (`Not excellent`);
    }
}
excellentGrade ([4.35])