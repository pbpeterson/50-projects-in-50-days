const dogs = document.querySelector('.dogsMain')

async function getDogandSet(){
  const datadog = await fetch('https://api.thedogapi.com/v1/images/search?limit=1&page=10&order=Desc')
  const dataJson = await datadog.json()
  console.log(dataJson)
  dataJson.forEach((dog)=>{
    const {url, breeds} = dog
    if(breeds.length){
      console.log()
      const newDiv = document.createElement('div');
      newDiv.classList.add('dog')
      newDiv.innerHTML = `<div class="dogImg"><img src="${url}" alt="${breeds[0].temperament}"></div> \n <div class="infos"><p>${breeds[0].name}</p> \n <p>${breeds[0].life_span}</p> \n <p>${breeds[0].temperament}</p></div>`
      dogs.appendChild(newDiv)
      
    }else{
      window.location.reload()
    }
  })
}

getDogandSet()