class ValidaFormulario {
  constructor() {
    const numeros = this.criaPergunta();
    this.num1 = numeros[0];
    this.num2 = numeros[1];
    this.resultado = numeros[2];
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  criaPergunta() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const resultado = num1 + num2;
    window.onload = function () {
      document.getElementById("valida").innerHTML = "Qual é a soma de " + num1 + " + " + num2 + " ?";
    }
    return [num1, num2, resultado];
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();

    if(camposValidos) {
      this.formulario.submit();
    } else {
      const numeros = this.criaPergunta();
      this.num1 = numeros[0];
      this.num2 = numeros[1];
      this.resultado = numeros[2];
      document.getElementById("valida").innerHTML = "Qual é a soma de " + this.num1 + " + " + this.num2 + " ?";
    }
  }

  camposSaoValidos() {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if(campo.classList.contains('resposta')) {
        if(!this.validaSoma(campo)) valid = false;
      }

      if(campo.classList.contains('telefone')) {
        if(!this.validaTelefone(campo)) valid = false;
      }

      if(campo.classList.contains('firstName')) {
        if(!this.validaFirstName(campo)) valid = false;
      }

      if(campo.classList.contains('lastName')) {
        if(!this.validaLastName(campo)) valid = false;
      }

    }

    return valid;
  }

  validaSoma(campo) {
    const resposta = campo.value;
    let valid = true;
    if (!resposta) { valid = false; }
    if (this.resultado !== Number(resposta)) {
      this.criaErro(campo, `Resultado da soma errado.`);
      valid = false;
    }
    return valid;
  }

  validaTelefone(campo) {
    const telefone = campo.value;
    let valid = true;

    if(telefone.length < 10 || telefone.length > 11) {
      this.criaErro(campo, 'telefone precisa ter entre 10 e 11 caracteres.');
      valid = false;
    }
    // cpfEnviado.replace(/\D+/g, '')
    if(!telefone.match(/^[0-9]+$/g)) {
      this.criaErro(campo, 'Telefone precisar conter apenas números.');
      valid = false;
    }

    return valid;
  }

  validaFirstName(campo) {
    const firstName = campo.value;
    let valid = true;

    if(firstName.length < 3 || firstName.length > 35) {
      this.criaErro(campo, 'Primeiro nome deve ter entre 3 e 35 caracteres.');
      valid = false;
    }
    return valid;
  }

  validaLastName(campo) {
    const lastName = campo.value;
    let valid = true;

    if(lastName.length < 3 || lastName.length > 35) {
      this.criaErro(campo, 'O último nome deve ter entre 3 e 35 caracteres.');
      valid = false;
    }
    return valid;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}
const valida = new ValidaFormulario();
