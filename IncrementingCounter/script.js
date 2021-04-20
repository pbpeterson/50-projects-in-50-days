const numbers = document.querySelectorAll('h1');

numbers.forEach((number)=>{
  const valorNumber = +number.innerText;
  let somador = Math.floor(valorNumber/900);
  const timer = setInterval(()=>{
    somador = somador + valorNumber/100;
    number.innerText = somador;
    if(somador > valorNumber){
      clearInterval(timer);
      number.innerText = valorNumber;
    }
  }, 25 *Math.random())
})
