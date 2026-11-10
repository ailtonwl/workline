function meuEscopo () {
  const form = document.querySelector('.formContato');
  const container = document.querySelector('.retornoContato');

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.firstName');
    let tagCriada = document.createElement('div');
    let texto = document.createTextNode(`${nome.value}, agradecemos o seu contato. Em breve retornaremos.`);
    tagCriada.classList.add('aviso');
    tagCriada.innerHTML = (texto);

    container.appendChild(tagCriada);

    // resultado.innerHTML = `${nome.value}, agradecemos o seu contato. Em breve retornaremos.`;
  }

  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();