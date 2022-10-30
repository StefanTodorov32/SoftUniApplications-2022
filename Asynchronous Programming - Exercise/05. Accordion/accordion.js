function solution() {

    const url = `http://localhost:3030/jsonstore/advanced/articles/details`
    const main = document.getElementById('main')

    fetch(url)
        .then(response => response.json())
        .then(data => {
            main.innerHTML = ``
            Object.values(data).forEach((element) => {
                const artcile = createArticle(element)
                main.innerHTML += artcile
            })
        })
    function createArticle(articleInfo) {
        let artcile = ` <div class="accordion">
        <div class="head">
            <span>${articleInfo.title}</span>
            <button class="button" id="${articleInfo._id}">More</button>
        </div>
        <div class="extra">
            <p>${articleInfo.content}</p>
        </div>
    </div>`
        return artcile
    }

    main.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON'
        if (!isButton) {
            return
        }
        let article = event.target.parentElement.parentElement.querySelector('.extra')
        let button =  event.target.parentElement.lastElementChild
        if (button.textContent === 'More') {
            article.style.display = 'block'
            button.textContent = 'Less'
        }else{
            button.textContent = 'More'
            article.style.display = 'none'
        }
        
    })
}
solution()