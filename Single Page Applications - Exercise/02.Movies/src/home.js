import { showCreate } from "./create.js"
import { showDetails } from "./details.js"
import { e, showView } from "./dom.js"

const section = document.getElementById('home-page')
const catalog = section.querySelector('.card-deck.d-flex.justify-content-center')
section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault()
    showCreate()

})
catalog.addEventListener('click',(event)=>{
    event.preventDefault()
    let target = event.target
    if (target.tagName =='BUTTON') {
        target = target.parentElement
    }
    if (target.tagName == 'A') {
        const id = target.dataset.id
        showDetails(id)
    }
})
section.remove()

export async function showHome() {
    showView(section)
    await getMovies()
}
async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies')
    const data = await res.json()
    const stored = Object.values(data.map(x=>createMovieCard(x)))
    catalog.replaceChildren(...stored)
}

function createMovieCard(movie) {
    const element = e('div', { className: 'card mb-4' })
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title} 1984</h4>
    </div>
    <div class="card-footer">
        <a data-id="${movie._id}" href="#">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>`
    return element
}