function walking (input) {
    let index = 0;
    
    let steps = input[index];
    index++

    stepCount = 0;
    while (steps !== "Going home") {
        let walk = Number([steps]);
        stepCount+= walk;
        if (index > input.length) {
            break;
        }
        steps = input[index];
        index++;
    }
    let allSteps = Math.abs(10000 - stepCount);
    if (steps === "Going home") {
        steps = Number(input[index]);
        allSteps = Math.abs(allSteps - steps);
        stepCount += steps;
    }
    if (stepCount >= 10000) {
        console.log (`Goal reached! Good job!`);
        console.log (`${allSteps} steps over the goal!`);
    } else {
        console.log (`${allSteps} more steps to reach goal.`);
    }
}
walking (["1000",
"1500",
"2000",
"6500"])






