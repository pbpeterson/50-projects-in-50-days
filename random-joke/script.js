const botao = document.querySelector('button');
const piada = document.querySelector('.piada');

async function pegaEMostraPiada(){
  const pegaPiada = await fetch('https://api.chucknorris.io/jokes/random');
  const piadaJson = await pegaPiada.json()
  piada.innerText = piadaJson.value
}

botao.addEventListener('click', pegaEMostraPiada);