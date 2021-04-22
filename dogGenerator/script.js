const dogs = document.querySelector('.dogsMain');

async function getDogandSet(){
  const datadog = await fetch('https://api.thedogapi.com/v1/images/search?limit=1&page=10&order=Desc')
  const dataJson = await datadog.json()
  dataJson.forEach((dog)=>{
    const {url, breeds} = dog
    if(breeds.length){
      dogs.innerHTML = ''
      const newDiv = document.createElement('div');
      newDiv.classList.add('dog')
      newDiv.innerHTML = `<div class="dogsImg"><img src="${url}" alt="${breeds[0].temperament}"></div> \n <div class="infos"><p>Name: ${breeds[0].name}</p> \n <p>Life: ${breeds[0].life_span}</p> \n <p>Temperament: ${breeds[0].temperament}</p></div>`
      dogs.appendChild(newDiv);
      const click = document.createElement('a');
      click.classList.add('click');
      click.innerText = 'Click Me!'
      dogs.appendChild(click);    
      click.addEventListener('click', getDogandSet)
    }else{
      window.location.reload()
    }
  })
}

getDogandSet()