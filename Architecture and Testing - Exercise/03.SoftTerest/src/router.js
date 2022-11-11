const main = document.getElementById('mainView')
const nav = document.querySelector('.container')
export function initialize(endpoint) {

    nav.addEventListener('click', onNavigate)
    const context = {
        showSection,
        goTo
    }
    return context
    function goTo(path, ...params) {
        console.log(...params);
        checkAuth()
        const renderer = endpoint[path]
        if (typeof renderer === 'function') {
            renderer(context, ...params)
        }
    }
    function onNavigate(event) {
        event.preventDefault()
        let target = event.target
        if (target.nodeName == 'IMG') {
            target = target.parentElement
        }
        if (target.nodeName == "A") {
            const url = new URL(target)
            goTo(url.pathname)
        }
    }
    function showSection(section) {
        main.replaceChildren(section)
    }

}
function checkAuth() {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (user) {
        document.querySelector('[href="/login"]').style.display = 'none'
        document.querySelector('[href="/register"]').style.display = 'none'
        document.querySelector('[href="/logout"]').style.display = 'inline-block'
        document.querySelector('[href="/create"]').style.display = 'inline-block'
    } else {
        document.querySelector('[href="/logout"]').style.display = 'none'
        document.querySelector('[href="/create"]').style.display = 'none'
        document.querySelector('[href="/login"]').style.display = 'inline-block'
        document.querySelector('[href="/register"]').style.display = 'inline-block'
    }
}