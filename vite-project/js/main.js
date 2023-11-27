import {movies} from  "./arrays.js" 
const domselectors = {
    flexwrapper : document.querySelector(".flex-wrapper"),
    oscarswitch : document.querySelector("#Oscar"),
    yearswitch : document.querySelector("#year"),
    metaswitch : document.querySelector("#meta"),
    light: document.querySelector("#light"),
    dark : document.querySelector("#dark")
}
let light=true
let dark=false
function switchtoggled(){
    light=!light
    dark=!dark
    if (light){
        domselectors.light.classList.add("toggled");
        domselectors.dark.classList.remove("toggled");
        domselectors.dark.classList.add("untoggled");
        domselectors.light.classList.remove("untoggled");
    }
    else{
        domselectors.dark.classList.add("toggled");
        domselectors.light.classList.remove("toggled");
        domselectors.light.classList.add("untoggled");
        domselectors.dark.classList.remove("untoggled");
    }
    changetheme()
}

function changetheme(){
    if(light){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    else{
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
}
domselectors.light.addEventListener("click", function(event) { 
    if(!light){
    switchtoggled();}
    console.log("light")
  });

domselectors.dark.addEventListener("click", function(event) { 
    if(!dark){
            switchtoggled();}
    console.log("dark")
  });

  
let filteredmovies=movies

function filtermovies() {
    filteredmovies = movies
    if (domselectors.oscarswitch.checked===true){
        filteredmovies=filteredmovies.filter((movie)=>movie.Oscar==true)
    }
    if (domselectors.yearswitch.checked===true){
        filteredmovies=filteredmovies.filter((movie)=>movie.year > 1999)
    }
    if (domselectors.metaswitch.checked===true){
        filteredmovies=filteredmovies.filter((movie)=>movie.metacritic > 89)
    }
    makemovie()
}


function makemovie() {
    while (domselectors.flexwrapper.firstChild) {
        domselectors.flexwrapper.removeChild(domselectors.flexwrapper.lastChild);
      }
    filteredmovies.forEach((movie)=>domselectors.flexwrapper.insertAdjacentHTML(
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
document.addEventListener( "DOMContentLoaded", makemovie(), changetheme())

domselectors.oscarswitch.addEventListener("click", filtermovies);
domselectors.yearswitch.addEventListener("click", filtermovies);
domselectors.metaswitch.addEventListener("click", filtermovies);