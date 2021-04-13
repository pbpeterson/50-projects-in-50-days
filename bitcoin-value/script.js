const content = document.querySelector('.content');

async function pegaValorBtc(){
  let valorBtc = await fetch('https://blockchain.info/ticker');
  valorBtc = await valorBtc.json();
  valorBtc = valorBtc.BRL.buy;
  valorBtc = String.prototype.replace.call(valorBtc, '.', ',');
  content.innerHTML = `<p> O Valor de 1 Bitcoin está em R$ ${valorBtc}</p>`
};

pegaValorBtc();
setInterval(()=>{
  pegaValorBtc();
}, 300000);



