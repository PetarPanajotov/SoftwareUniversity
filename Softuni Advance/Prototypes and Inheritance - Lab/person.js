function createPerson(firstName, lastName) {
    let result = {
        firstName,
        lastName
    }
    Object.defineProperty(result, "fullName", {
        get() { return result.firstName + " " + result.lastName },
        set(val) {
            let [firstName, lastName] = val.split(' ');
            if (firstName && lastName) {
                result.firstName = firstName;
                result.lastName = lastName;
            }
        }
    })
    return result
}
let person = createPerson("Albert", "Simpson");

console.log(person.fullName); //Albert Simpson

person.firstName = "Simon";

console.log(person.fullName); //Simon Simpson

person.fullName = "Peter";

console.log(person.firstName); // Simon

console.log(person.lastName); // Simpson