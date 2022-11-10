import { showView } from "./dom.js"

const section = document.getElementById('form-sign-up')
section.remove()

export function showRegister(){
    showView(section)
}