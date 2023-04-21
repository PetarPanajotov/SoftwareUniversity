function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    debugger;
    return function () {
        let current = articles.shift()
        if (current === undefined) {
            return
        }
        debugger;
        return content.innerHTML += `<article>${current}</article>`
    }
}
