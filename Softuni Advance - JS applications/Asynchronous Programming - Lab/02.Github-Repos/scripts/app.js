function loadRepos() {
	const user = document.getElementById('username').value;
	const repos = document.getElementById('repos');
	fetch(`https://api.github.com/users/${user}/repos`)
		.then(handleResponse)
		.then(renderRepos)
		.catch(handleError);
	function handleResponse(response) {
		if (response.ok == false) {
			debugger;
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
		return response.json();
	}
	function renderRepos(data) {
		repos.innerHTML = ''
		data.forEach(element => {
			let fullName = element.full_name;
			let htmlUrl = element.html_url;
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.textContent = fullName;
			a.href = htmlUrl;
			li.appendChild(a);
			repos.appendChild(li);
		});
	}
	function handleError(err){
		repos.textContent = err.message;
	} 
}