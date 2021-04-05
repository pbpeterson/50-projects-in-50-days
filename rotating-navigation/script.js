const abrir = document.getElementById('open');
const fechar = document.getElementById('close');
const container = document.querySelector('.container');
const navegacao = document.querySelector('.navegacao')

function addAtivo(){
  container.classList.add('show-nav');
  navegacao.classList.add('ativo')
}

function closeAtivo(){
  container.classList.remove('show-nav');
  navegacao.classList.remove('ativo')
}

abrir.addEventListener('click', addAtivo);
fechar.addEventListener('click', closeAtivo);