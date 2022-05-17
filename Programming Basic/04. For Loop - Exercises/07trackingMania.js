function trackingMania (input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;

    let peak = "";
    let musalaPeople = 0;
    let moblanPeople = 0;
    let kilimandjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;
    let allPeople = 0;

    for (let i = 0; i < groups; i++) {
        let groupTracking = Number(input[index]);
        index++;

        if (groupTracking <= 5) {
            peak = "Musala";
            musalaPeople += groupTracking;
        } else if (groupTracking > 5 && groupTracking <= 12) {
            peak = "Moblan";
            moblanPeople += groupTracking
        } else if (groupTracking > 12 && groupTracking <=25) {
            peak = "Kilimandjaro";
            kilimandjaroPeople += groupTracking;
        } else if (groupTracking > 25 && groupTracking <= 40) {
            peak = "K2";
            k2People += groupTracking;
        } else {
            peak = "Everest";
            everestPeople += groupTracking;
        }
        allPeople += groupTracking;
    }
    musalaPeople = (musalaPeople / allPeople) * 100;
    moblanPeople = (moblanPeople / allPeople) * 100;
    kilimandjaroPeople = (kilimandjaroPeople / allPeople) * 100;
    k2People = (k2People / allPeople) * 100;
    everestPeople = (everestPeople / allPeople) * 100;
    console.log (musalaPeople.toFixed(2) + "%")
    console.log (moblanPeople.toFixed(2) + "%");
    console.log (kilimandjaroPeople.toFixed(2) + "%");
    console.log (k2People.toFixed(2) + "%");
    console.log (everestPeople.toFixed(2) + "%");
}
trackingMania (["5",
"25",
"41",
"31",
"250",
"6"])
