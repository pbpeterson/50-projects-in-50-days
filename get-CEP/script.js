const cep = document.getElementById('cep')
const botao = document.querySelector('button')
const div = document.querySelector('.infos')

async function exibeDadosPostais(){
  if(cep.value.length !=8){
    alert('Insira um Cep válido')
    cep.value = ''
  }
  else{
    if (div.innerText.length){
      div.removeChild(div.firstElementChild)
    }
      const pegaCep = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
      const cepJson = await pegaCep.json()
      const novoP = document.createElement('p')
      novoP.innerText = `Rua ${cepJson.logradouro} \n  Bairro: ${cepJson.bairro} \n Cidade: ${cepJson.localidade} \n UF: ${cepJson.uf}`
      div.appendChild(novoP)
  }
 
}

botao.addEventListener('click', exibeDadosPostais)