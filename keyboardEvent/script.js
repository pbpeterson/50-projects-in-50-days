const divInitial = document.querySelector('.initial');
const events = document.querySelector('.events');
const eventKey = document.querySelector('.eventKey');
const eventKeyCode = document.querySelector('.eventKeyCode');
const eventCode = document.querySelector('.eventCode');

function keyFunction(event){
  divInitial.classList.add('hide');
  events.classList.add('show');
  eventKey.innerText = event.key;
  eventKeyCode.innerText = event.keyCode;
  eventCode.innerText = event.code
  console.log(event);
}

window.addEventListener('keydown', keyFunction);