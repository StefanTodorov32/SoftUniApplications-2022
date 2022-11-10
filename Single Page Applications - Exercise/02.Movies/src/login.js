import { updateNav } from "./app.js"
import { showView } from "./dom.js"
import { showHome } from "./home.js"

const section = document.getElementById('form-login')
const form = section.querySelector('form')
form.addEventListener('submit', onLogin)
section.remove()

export function showLogin(){
    showView(section)
}
async function onLogin(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()

    try{
        const res = await fetch('http://localhost:3030/users/login',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email, password})
        })
        if (res.ok == false) {
            const error = await res.json()
            throw new Error(error.message)
        }
        const data = await res.json()
        sessionStorage.setItem('userData',JSON.stringify({email: data.email, id:data._id, token:data.accessToken}))
        form.reset()
        updateNav()
        showHome()
    }catch(e){
        alert(e.message)
    }

}