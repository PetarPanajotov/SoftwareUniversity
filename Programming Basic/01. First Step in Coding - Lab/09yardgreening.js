function yardgreening(index) {
    let squaremeters = Number(index[0]);
    let squaremetersgreening = squaremeters * 7.61;
    let discount = squaremetersgreening * 0.18; //18% отстъпка към цената
    let finalprice = squaremetersgreening - discount;
    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.` );
}
yardgreening(['550']);
