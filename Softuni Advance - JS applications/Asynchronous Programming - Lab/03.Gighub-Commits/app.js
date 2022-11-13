function loadCommits() {
    let user = document.getElementById('username');
    let repo = document.getElementById('repo');
    const url = `https://api.github.com/repos/${user.value}/${repo.value}/commits`
    const commits = document.getElementById('commits')
    fetch(url)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError)

    function handleResponse(response) {
        if(response.ok == false) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        return response.json();
    }
    function handleData(data) {
        user.value = "";
        repo.value = "";
        commits.innerHTML = ""
        data.forEach(element => {
            const li = document.createElement('li')
            li.textContent = `${element.commit.author.name}: ${element.commit.message}`
            commits.appendChild(li)    
        });
    }
    function handleError(err) {
        commits.textContent = err.message
    }
}