import {updateAuth} from './auth.js'

const loginSection = document.querySelector('.login')
const loginForm = document.querySelector('.login form')

loginForm.addEventListener('submit', onLogin)

export function renderLogin(){
    loginSection.style.display = 'block'
}
async function onLogin(e){
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    let password = formData.get('password')

    const response = await fetch('http://localhost:3030/users/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            
        },
        body:JSON.stringify({email,password})
    })
    const data = await response.json()
    sessionStorage.setItem('userData', JSON.stringify({data}))
    updateAuth()
    alert('Logged In!')
}