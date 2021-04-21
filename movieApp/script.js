const main = document.querySelector('main');
const form = document.querySelector('form');
const input = document.getElementById('search');
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?sort_by_popularity.desc&api_key=e93374bbc72ae918becf0e60f42d1bea&query="';



const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'
const APIfilmes = 'https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=e93374bbc72ae918becf0e60f42d1bea';

async function pegaFilme(url){
  const APIdata = await ((await fetch(url)).json())
  
  mostrarFilme(APIdata.results)
}

function mostrarFilme(movies){
  movies.forEach((movie) =>{
    const { title, poster_path, overview, vote_average} = movie;
    const currentMovie = document.createElement('div');
    currentMovie.classList.add('movie')
    currentMovie.innerHTML = `
    <div class="movie">
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${pegarAvaliacao(vote_average)}">${vote_average}</span>
      </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
  </div>`;
  main.appendChild(currentMovie)
  })
}

function pegarAvaliacao(number){
  if (number >= 8){
    return 'green'
  }else if (number >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


async function buscaFilme(event){
  event.preventDefault()
  const filmePesq = input.value;
  if(filmePesq && filmePesq != ''){
    await pegaFilme(SEARCH_URL + filmePesq)
    input.value = ''
  }else{
    window.location.reload()
  }
 
}

pegaFilme(APIfilmes)
form.addEventListener('submit', buscaFilme)