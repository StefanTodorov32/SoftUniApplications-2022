import { createIdea } from "./data.js"

let ctx = null

const section = document.getElementById('createView')
const form = section.querySelector('form')

form.addEventListener('submit', onCreate)

export function showCreate(context){
    ctx = context
    context.showSection(section)
}
async function onCreate(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const {title, description, imageURL} = Object.fromEntries(formData)
    const body = {
        title:title,
        description:description,
        img:imageURL
    }
    await createIdea(body)
    form.reset()
    ctx.goTo('/catalog')
}