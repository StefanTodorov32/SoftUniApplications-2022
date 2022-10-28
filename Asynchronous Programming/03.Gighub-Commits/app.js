function loadCommits() {
    let username = document.getElementById("username").value
    let repoName = document.getElementById('repo').value
    let commits = document.getElementById('commits')
    fetch(`https://api.github.com/repos/${username}/${repoName}/commits`)
        .then(response => handleResponse(response, commits))
        .then(data => handleData(data, commits))
        .catch(error => handleErrors(error))
}
const handleResponse = (response, commits) => {
    if (!response.ok) {
        commits.textContent = `Error: ${response.status}  (${response.statusText})`
    }
    return response.json()
}
const handleData = (data, commits) => {
    let listedItems = data.map(commit =>{
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.textContent = `${commit['commit']['author'].name}: ${commit['commit'].message}`
        li.appendChild(a)
        commits.appendChild(li)
        return li
    })
    commits.replaceChildren(...listedItems)
}
const handleErrors = (error) => {
	console.log(error);
}