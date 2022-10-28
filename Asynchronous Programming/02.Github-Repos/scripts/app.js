function loadRepos() {
	let searchTerm = document.getElementById('username').value

	fetch(`https://api.github.com/users/${searchTerm}/repos`)
		.then(response => handleResponse(response))
		.then(data => handleData(data))
		.catch(error => handleErrors(error))
}
const handleResponse = (res) => {
	let ul = document.getElementById('repos')
	if (!res.ok) {
		ul.textContent = "Not Found"
	}
	return res.json()
}
const handleData = (data) => {
	let ul = document.getElementById('repos')
	let listedItems = data.map(repo => {
		let li = document.createElement('li')
		let a = document.createElement('a')
		a.href = repo.html_url
		a.textContent = repo.full_name
		li.appendChild(a)
		ul.appendChild(li)
		return li
	})
	ul.replaceChildren(...listedItems)
}
const handleErrors = (error) => {
	console.log(error);
}