import {updateAuth} from './auth.js'

const registerSection = document.querySelector('.register')
const registerForm = document.querySelector('.register form')
registerForm.addEventListener('submit', onregister)
export function renderRegister(){
    registerSection.style.display = 'block'
}
async function onregister(e){
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('rePass')

    if (rePass !== password) {
        alert('Passwords dont match!')
    }

    const response = await fetch('http://localhost:3030/users/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({email,password})
    })
    const data = await response.json()
    console.log(data);
    sessionStorage.setItem('userData', JSON.stringify({data}))
    updateAuth()
    alert('Registered !')
}