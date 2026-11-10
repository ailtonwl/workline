// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  let firstName = e.target.querySelector('#first-name').value;
  let lastName = e.target.querySelector('#last-name').value;

  let email = e.target.querySelector('#email').value;
  let telefone = e.target.querySelector('#telefone').value;
  let message = e.target.querySelector('#message').value;

  firstName = firstName.trim();
  lastName = lastName.trim();
  telefone = telefone.trim();
  email = email.trim();

  if (firstName.length < 3) {
    setResultado('O Primeiro Nome deve ter pelo menos 3 letras', false);
    e.preventDefault();
    return;
  }

  if (lastName.length < 3) {
    setResultado('O Sobrenome deve ter pelo menos 3 letras', false);
    e.preventDefault();
    return;
  }

  if (email.length < 5) {
    setResultado('Preencha um e-mail válido', false);
    e.preventDefault();
    return;
  }

  if (telefone.length < 10) {
    setResultado('Número inválido. Informe o número do telefone com DDD.', false);
    e.preventDefault();
    return;
  }

  const msg = `${firstName}, você receberá a confirmação deste envio em seu e-mail.`;

  setResultado(msg, true);
});

// function criaDiv () {
//   const myDiv = document.createElement('div');
//   return myDiv;
// }

function setResultado (msg, isValid) {
  // const resultado = document.querySelector('.retornocontato');
  // resultado.innerHTML = '';

  // const div = criaDiv();

  if (isValid) {
    // div.classList.add('aviso');
    // div.innerHTML = msg;
    // resultado.appendChild(div);
    alert("Uma mensagem de confirmação foi enviada para o seu endereço de e-mail.");
    } else {
    // p.classList.add('bad');
    // div.classList.add('aviso');
    alert(msg);
  }
}
