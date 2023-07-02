function gramophone (band, album, song) {
    let duration = (album.length * band.length) * song.length / 2;
    let rotation = duration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}
gramophone('Black Sabbath', 'Paranoid',

'War Pigs');