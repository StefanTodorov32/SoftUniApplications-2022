import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,

}


document.querySelector('nav').addEventListener('click', (event) => {
    const view = views[event.target.id]
    if (typeof view === 'function') {
        event.preventDefault()
        view()
    }
})

updateNav()
showHome()

export function updateNav(){
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    
    if (userData !== null) {
        document.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.email}`;
        [...document.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
    }else{
        [...document.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
        [...document.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
    }
}
document.getElementById('logoutBtn').addEventListener('click', onLogout)
async function onLogout(event){
    event.preventDefault()
    const token = JSON.parse(sessionStorage.getItem('userData')).token
    await fetch('http://localhost:3030/users/logout',{
        headers:{
            'X-Authorization': token
        }
    })
    sessionStorage.removeItem('userData')
    updateNav()
    showLogin()
}