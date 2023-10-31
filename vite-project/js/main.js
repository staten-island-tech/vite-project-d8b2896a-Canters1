import {movies} from  "./arrays.js" 
const domselectors = {
    flexwrapper : document.querySelector(".flex-wrapper"),
}
console.log(movies)
function makemovie() {

   return movies.forEach((movie)=>domselectors.flexwrapper.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
        <img src='${movie.poster}' alt="">
        <div class="card-content">
        <h2>
            ${movie.title}
        </h2>
        <p>
            Directed by: ${movie.director}. Released in ${movie.year}
        </p>

        </div>
    </div>`
  ));
}
makemovie()
