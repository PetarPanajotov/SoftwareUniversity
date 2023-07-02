function songs (arr) {
    let copyofArr = arr.slice()
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        names() {
            console.log(this.name)
        }
    }
    let keyWord = copyofArr.pop()
    let numberofSongs = copyofArr.shift()
    for (let i = 0; i < numberofSongs; i++) {
        let token = copyofArr.shift().split("_");
        let typeList = token[0];
        let name = token[1];
        let time = token[2];
        if (typeList === keyWord) {
            let song = new Song(typeList, name, time);
            song.names();
        } else if (keyWord === "all") {
            let song = new Song(typeList, name, time);
            song.names();
        }
    }
}
songs ([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])