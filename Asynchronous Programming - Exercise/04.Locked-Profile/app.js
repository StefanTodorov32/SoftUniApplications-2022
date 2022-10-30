function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`
    const main = document.getElementById('main')

    fetch(url)
        .then(response => response.json())
        .then(data => {
            main.innerHTML = ``
            Object.values(data).forEach((element, index) => {
                const profile = createProfile(element, index)
                main.appendChild(profile)
            })
        })
    function createProfile(info, index) {
        const div = document.createElement('div');
        div.classList.add('profile');
        div.innerHTML = `
                        <img src="./iconProfile2.png" class="userIcon" />
                        <label>Lock</label>
                        <input type="radio" name="user${index + 1}Locked" value="lock" checked>
                        <label>Unlock</label>
                        <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
                        <hr>
                        <label>Username</label>
                        <input type="text" name="user1Username" value="${info.username}" disabled readonly />
                        <div id="hidfields" display = "nonde">
                            <hr>
                            <label>Email:</label>
                            <input type="email" name="user${index + 1}Email" value="${info.email}" disabled readonly/>
                            <label>Age:</label>
                            <input type="email" name="user${index + 1}Age" value="${info.age}"  disabled readonly/>
                        </div>
                        <button>Hide it</button>`
        return div;
    }
    main.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON'
        if (!isButton) {
            return
        }
        let profile = event.target.parentElement

        let lockButton = profile.querySelector('input')
        if (lockButton.checked) {
            return
        }
        let showButton = profile.querySelector('button')
        let emailDiv = profile.querySelector('#hidfields')
        if (showButton.textContent === 'Show more') {
            showButton.textContent = 'Hide it'
            emailDiv.style.display = 'block'

        } else {
            showButton.textContent = 'Show more'
            emailDiv.style.display = 'none'
        }
    })
}