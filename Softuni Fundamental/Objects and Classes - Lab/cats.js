function cats (arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catData of arr) {
        let token = catData.split(" ")
        let name = token[0];
        let age = token[1];
        let classparse = new Cat(name, age)
        classparse.meow()
        
    }
}
cats (['Candy 1', 'Poppy 3', 'Nyx 2']);