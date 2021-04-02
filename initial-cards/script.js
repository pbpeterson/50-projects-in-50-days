const imgs = document.querySelectorAll('.painel')

function removeActiveClasses(painel){
  painel.forEach((item) =>{
    item.classList.remove('ativo')
  })
}

imgs.forEach((imagem) =>{
  imagem.addEventListener('click', () =>{
    removeActiveClasses(imgs)
    imagem.classList.add('ativo')
  })
})
