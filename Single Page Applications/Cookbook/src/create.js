const createSection = document.querySelector('.create')
const createForm = createSection.querySelector('form')
createForm.addEventListener('submit',onCreate)
export function renderCreate() {
    createSection.style.display = 'block'
}
async function onCreate(e){
    e.preventDefault()

    let formData = new FormData(e.currentTarget)

    let name = formData.get('name')
    let img = formData.get('img')
    let ingredients = formData.get('ingredients').split('\n')
    let steps = formData.get('steps').split('\n')

    let data = {
        name, img, ingredients, steps
    }

    let accessToken = JSON.parse(sessionStorage.getItem('userData')).data.accessToken
    const response = await fetch('http://localhost:3030/data/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
}