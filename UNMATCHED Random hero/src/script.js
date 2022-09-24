function random() {
    let heroes = {}
    let input = document.querySelectorAll('.images figure figcaption');
    let arr = Array.from(input);
    for (let index of arr) {
        let current = index.innerText;
        if (index !== "" || index !== undefined) {
        heroes[current] = 1
        }
    }
    let keys = Object.keys(heroes);
    let randomHero = keys[Math.floor(Math.random() * keys.length)];
    alert(randomHero)
    document.getElementById(randomHero).remove()
}

