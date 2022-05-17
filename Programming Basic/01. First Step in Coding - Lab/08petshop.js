function Zoomagazine(input) {
    let packagedogfood = Number(input[0]);
    let packagecatfood = Number(input[1]);
    let finalpricedogfoodonly = 2.50 * packagedogfood;
    let finalpricecatfoodonly = 4 * packagecatfood;
    let finalprice = finalpricecatfoodonly + finalpricedogfoodonly;
    console.log (`${finalprice} lv.`);
}
Zoomagazine (['1' , '5'])