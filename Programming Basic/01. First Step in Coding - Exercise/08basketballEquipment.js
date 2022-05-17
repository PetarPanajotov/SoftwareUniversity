function basketballEquipment (input) {
    let annualFee = Number(input[0]);

    let sneakers = annualFee * (60 / 100);          // 40% по-малка от таксата за една година
    let basketballOutfit = sneakers * (80 / 100);    // 20% по-евтин от кецовете
    let ball =  basketballOutfit * (25 / 100);
    let basketballAccessories = ball * (20 /100);

    let price = sneakers + basketballOutfit + ball + basketballAccessories + annualFee;
    
    console.log (price);
}
basketballEquipment (["365"]);
basketballEquipment (["550"]);