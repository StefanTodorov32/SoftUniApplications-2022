import { register } from "../user.js"
const section = document.getElementById('registerView')

export function showRegister(context) {
    ctx = context
    context.showSection(section)
}
let ctx = null

const form = section.querySelector('form')
form.addEventListener('submit', onRegister)


async function onRegister(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const repass = formData.get('repeatPassword')
    if (password !== repass) {
        throw new Error('Passwords are not equal!')
    }else{
        await register(email, password)
        ctx.goTo('/')
    }
}