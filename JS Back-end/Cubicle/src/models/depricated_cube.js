const fs = require('fs');
const db = require('../config/database.json');
const path = require('path');

class Cube {
    constructor(name, description, imgUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.difficultyLevel = difficultyLevel;
    }

    save() {
        let id = db.cubes[db.cubes.length-1].id + 1;
        this.id = id;
        db.cubes.push(this);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../config/database.json'), jsonData);
        console.log('yr');
    }
}
module.exports = Cube;