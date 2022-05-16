let elWrapper = document.querySelector("#wrapper")
let elForm = document.querySelector(".form")
let elSearchInput = document.querySelector(".form-input")
let elSearchBtn = document.querySelector(".search-btn")
let elTemplate = document.querySelector("#template").content;
let newMovies = kinolar.splice(0, 20);
let normalizeMovies = newMovies.map(function (item) {
    return{
        Title: item.title,
        Year: item.year,
        Cast: item.cast.join(", "),
        Genres: item.genres.join(", ")
    }
});

let elFragment = document.createDocumentFragment()

function renderMovies(item, wrapper) { 
    item.forEach((array) => {
        let newTemplate = elTemplate.cloneNode(true)
        newTemplate.querySelector(".movies-title").textContent = array.Title
        newTemplate.querySelector(".movies-year").textContent = array.Year
        newTemplate.querySelector(".movies-cast").textContent = array.Cast
        newTemplate.querySelector(".movies-genres").textContent = array.Genres
        elFragment.appendChild(newTemplate)
    })
    wrapper.appendChild(elFragment)
}
renderMovies(normalizeMovies, elWrapper);

function serachFind(movie_title) {
    return normalizeMovies.filter(function (movie) {
        return movie.Title.match(movie_title)
        
    })
}

elForm.addEventListener("input", (evt) => {
    evt.preventDefault()
    let searchInput = elSearchInput.value;

    let pattern = new RegExp(searchInput, "gi")
    let result = serachFind(pattern)
    

    elWrapper.innerHTML = null
    renderMovies(result, elWrapper);
})

