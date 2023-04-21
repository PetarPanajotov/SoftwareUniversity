const section = document.getElementById('home-page')
let ctx = null;
export function homeView(inCtx) {
    ctx = inCtx;
    document.getElementById('container').appendChild(section)

}