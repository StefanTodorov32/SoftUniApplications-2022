import { e, showView } from "./dom.js"

const section = document.getElementById('movie-details')
section.remove()

export function showDetails(id) {
    showView(section)
    getMovie(id)
}
async function getMovie(id) {
    const res = await fetch('http://localhost:3030/data/movies/' + id)
    const data = await res.json()
    section.replaceChildren(createDetails(data))
}
function createDetails(movie) {
    const controls = e('div', { className: "col-md-4 text-center" },
        e('h3', { className: 'my-3' }, 'Movie Description'),
        e('p', {}, movie.description)
    )
    const userData = JSON(sessionStorage.getItem('userData'))
    if (userData !== null) {
        
    }
    const element = e('div', { className: 'container' },
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
            ),
            controls

        ))
    return element

}
/*
<div class="container">
<div class="row bg-light text-dark">
  <h1>Movie title: Black Widow</h1>

  <div class="col-md-8">
    <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
      alt="Movie" />
  </div>
  <div class="col-md-4 text-center">
    <h3 class="my-3">Movie Description</h3>
    <p>
      Natasha Romanoff aka Black Widow confronts the darker parts of
      her ledger when a dangerous conspiracy with ties to her past
      arises. Comes on the screens 2020.
    </p>
    <a class="btn btn-danger" href="#">Delete</a>
    <a class="btn btn-warning" href="#">Edit</a>
    <a class="btn btn-primary" href="#">Like</a>
    <span class="enrolled-span">Liked 1</span>
  </div>
</div>
</div>
*/