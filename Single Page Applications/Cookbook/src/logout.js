import {logout} from './auth.js'

export function renderLogout(){
    logout()
    alert('Logout!')
}