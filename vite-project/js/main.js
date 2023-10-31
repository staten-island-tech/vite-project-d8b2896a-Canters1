import {movies} from  "./arrays.js" 
const domselectors = {
    flexwrapper : document.querySelector(".flex-wrapper"),
    oscarswitch : document.querySelector("#Oscar")
}

domselectors.oscarswitch.addEventListener("click", updateDisplay);
function updateDisplay() {
    if(domselectors.oscarswitch.checked===true){
        console.log("test")
        return true
    }
}




let filteredmovies=movies

function filtermovies() {
    if (updateDisplay()==true){
        filteredmovies=filteredmovies.filter((movie)=>movie.Oscar==true)
    }
}


function makemovie() {

   return filteredmovies.forEach((movie)=>domselectors.flexwrapper.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
        <div class = "img-div">
            <img src='${movie.poster}' alt="">
        </div>
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
