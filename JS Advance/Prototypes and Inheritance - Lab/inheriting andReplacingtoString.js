function result() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject;
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course;
        }
    }
    Person.prototype.toString = function() {
        if(this.name && this.email && this.course) {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        } else if (this.name && this.email && this.subject) {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        } else {
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }
    return {
        Person,
        Student,
        Teacher
    }
}
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let p = new Person('Pesho','pesho@pesho.com', 'ww');
console.log(p.toString())