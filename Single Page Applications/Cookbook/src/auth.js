const guestNavigation = document.querySelector('#guest')
const userNavigation = document.querySelector('#user')

export function updateAuth(){
    let userData = sessionStorage.getItem('userData')
    if (!userData) {
        guestNavigation.style.display = 'inline'
        userNavigation.style.display = 'none'

    }else{
        userNavigation.style.display = 'inline'
        guestNavigation.style.display = 'none'
    }
}
export function logout(){
    sessionStorage.removeItem('userData')
    updateAuth()
}