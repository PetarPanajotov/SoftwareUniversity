// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.

// The input comes as an array of string elements.

// The output should be printed on the console
function result(arg) {
    if(arg.dizziness) {
        let res = arg.levelOfHydrated;
        res += arg.weight * 0.10 * arg.experience;
        arg.levelOfHydrated = res
        arg.dizziness = false
    }
    return arg
}
let worker = result({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
);
console.log(worker)
