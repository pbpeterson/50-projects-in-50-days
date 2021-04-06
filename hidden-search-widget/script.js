const search = document.getElementById('search');
const ativaDesativa = document.querySelector('.clicar')

function abreEFecha(event){
  event.preventDefault();
  search.classList.toggle('ativo')
}

ativaDesativa.addEventListener('click', abreEFecha)