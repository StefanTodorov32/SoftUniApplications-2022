import { showCatalog } from './src/pages/catalog.js'
import { showCreate } from './src/pages/create.js'
import { showDetails } from './src/pages/details.js'
import { showHome } from './src/pages/home.js'
import { showLogin } from './src/pages/login.js'
import { showRegister } from './src/pages/register.js'
import {initialize} from './src/router.js'
import { logout } from './src/user.js'
const defSection = document.getElementById('defaultSection')

defSection.remove()

const endpoint = {
    '/': showHome,
    '/login': showLogin,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/register': showRegister,
    '/create': showCreate,
    '/logout': async function (){
        await logout()
        router.goTo('/')
    }
}
const router = initialize(endpoint)
router.goTo('/')

