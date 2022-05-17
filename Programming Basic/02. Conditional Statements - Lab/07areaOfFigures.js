function areaOfFigures (input) {
    let figure = input[0];
    let area = 0;
    if (figure === "square") {
        let a = Number(input[1]);
        area = a * a;
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (figure === "circle") {
        let r = Number(input[1])
        area = Math.PI * r * r;
    } else if (figure === "triangle") {
        let b = Number(input[1]);
        let h = Number(input[2]);
        area = (h * b) / 2;
    }
    console.log (area.toFixed(3));
}
areaOfFigures (["square" , "5"]);
areaOfFigures (["rectangle" , "7" , "2.5"]);
areaOfFigures (["circle" , "6"]);


