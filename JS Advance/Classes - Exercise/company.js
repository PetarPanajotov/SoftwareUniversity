class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error ("Invalid input!");
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({name: name, salary: salary, position: position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let departmentAvgSalary = {}
        let keys = Object.keys(this.departments);
        for (let key of keys) {
            let counter = 0;
            let currentDepartment = this.departments[key]
            for (let index of currentDepartment) {
                if (!departmentAvgSalary.hasOwnProperty(key)) {
                    departmentAvgSalary[key] = 0;
                }
                departmentAvgSalary[key] += index.salary;
                counter++;
            }
            departmentAvgSalary[key] /= counter;
        }
        let sortDepartment = Object.entries(departmentAvgSalary).sort((a,b) => b[1] - a[1]);
        let departmentsValues = Object.values(this.departments[sortDepartment[0][0]]);
        let sortEmployee = [];
        for (let value of departmentsValues) {
            sortEmployee.push([value.name, value.salary, value.position]);
        }
        sortEmployee.sort((a,b) => {
            return a[0].localeCompare(b[0]) && b[1] - a[1] || a[0].length - b[0].length;
        })
        let buff = "";
        for (let employee of sortEmployee) {
            buff += employee[0] + " " + employee[1] + " " + employee[2];
            buff += "\n"
        }
        buff = buff.substring(0, buff.length - 1)
    return `Best Department is: ${sortDepartment[0][0]}\nAverage salary: ${sortDepartment[0][1].toFixed(2)}\n${buff}`
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());