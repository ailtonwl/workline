function retornoContato() {
  document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('envioContato')) {
      alert('Agradecemos o seu contato. Em breve retornaremos.');
      const container = document.querySelector('.retornocontato');
      let tagCriada = document.createElement('p');
      let texto = document.createTextNode('Agradecemos o seu contato. Em breve retornaremos.');
      tagCriada.appendChild(texto);
      container.appendChild(tagCriada);
    }
  });
}
retornoContato();

// const elementos = [
//   {tag: 'p', texto: 'Frase 1'},
//   {tag: 'div', texto: 'Frase 2'},
//   {tag: 'footer', texto: 'Frase 3'},
//   {tag: 'section', texto: 'Frase 4'}
// ];

// const container = document.querySelector('.container');
// const div = document.createElement('div');

// for (i = 0; i < elementos.length; i++) {
//   let {tag, texto} = elementos[i];
//   let tagCriada = document.createElement(tag);
//   // tagCriada.innerText = texto;  // innerText porque só tem texto, então não precisa usar innerHTML
//   // além dessa forma na linha comentada acima, podemos fazer da seguinte maneira
//   let textoCriado = document.createTextNode(texto);
//   tagCriada.appendChild(textoCriado);
//   // essas duas linhas em substituição a linha comentada acima // tagCriada.innerText = texto;
//   div.appendChild(tagCriada);
// }

// container.appendChild(div);