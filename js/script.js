let elWrapper = document.querySelector("#wrapper")
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
