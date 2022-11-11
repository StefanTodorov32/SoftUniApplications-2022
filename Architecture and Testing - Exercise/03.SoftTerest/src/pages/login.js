import {login}from '../user.js'
let ctx = null

const section = document.getElementById('loginView')
const form = section.querySelector('form')
form.addEventListener('submit', onLogin)

export function showLogin(context){
    ctx = context
    context.showSection(section)
}

async function onLogin(event){
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')
    await login(email,password)
    form.reset()
    ctx.goTo('/')
    
}