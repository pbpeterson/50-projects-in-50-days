const tarefa = document.querySelector('.tarefa');
const adicionar = document.querySelector('.addTarefa');
const pendents = document.querySelector('.pendents');
const todoApp = document.querySelector('.todo');
let fecharButton = document.querySelectorAll('.button');
const limparTudo = document.querySelector('.clearAll');
const tasks = document.querySelector('.contents');

function removeSelf(event){
    event.path[1].remove()
    const conteudos = document.querySelectorAll('.content');
    if(conteudos.length ==0){
      pendents.classList.remove('ativo');
    }
}

function adicionarTarefa(){
  event.preventDefault();
  if(tarefa.value){
    const newDiv = document.createElement('div');
    newDiv.classList.add('content')
    newDiv.innerHTML = `<p>${tarefa.value}</p> \n <p class="button">✖</p>`;
    tasks.appendChild(newDiv);
    tarefa.value = '';
    fecharButton = document.querySelectorAll('.button');
    pendents.classList.add('ativo')
  }
  fecharButton.forEach((fechar) =>{
    fechar.addEventListener('click', removeSelf)
  });
}


function removerTudo(){
  const conteudos = document.querySelectorAll('.content');
  conteudos.forEach((conteudo) =>{
    conteudo.remove()
  })
  pendents.classList.remove('ativo');
}

adicionar.addEventListener('click', adicionarTarefa);
limparTudo.addEventListener('click', removerTudo);



