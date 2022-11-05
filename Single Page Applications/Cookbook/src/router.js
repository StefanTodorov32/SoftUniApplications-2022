import { renderHome } from "./home.js"
import { renderLogin } from "./login.js"
import { renderCreate } from "./create.js"
import { renderRegister } from "./register.js"
import { renderLogout } from "./logout.js"
import { render404 } from "./404.js"

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
    '/logout': renderLogout
}

export function router(path) {
    hideContent()

    const renderer = routes[path] || render404
    renderer()
}
function hideContent() {
    const mainContent = document.querySelector('.main-content')
    for (const section of mainContent.children) {
        section.style.display = 'none'
    }
}