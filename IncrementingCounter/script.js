const numbers = document.querySelectorAll('h1');

numbers.forEach((number)=>{
  const armazenaNumber = +number.innerText;
  const somador = Math.floor(armazenaNumber/100);
  let start = 0
  const timer = setInterval(()=>{
    start = start +somador
    number.innerText = start
    if(start > armazenaNumber){
      number.innerText = armazenaNumber;
      clearInterval(timer)
    }
  },25 * Math.random())
})
