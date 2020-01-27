import Input from '../components/input.js';
import Button from '../components/button.js';

function registerData() {

  let dadoslocal = JSON.parse(localStorage.getItem('cadastro'));
  const validateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
  const name =  document.querySelector('.input-n').value;
  const email = document.querySelector('.input-e').value;
  const senha = document.querySelector('.input-s').value;

  const isValid = email.match(validateEmail);
  console.log(isValid);
  console.log(validateEmail);
  console.log(email)
  console.log(name)


  if (isValid && senha.length >= 6) {
    const dados = {
      email,
      name,
      senha,
      posts: [],
    };

    if (!dadoslocal) {
      dados.id = 0;
      dadoslocal = [dados];
    } else {
      dados.id = dadoslocal.length;
      dadoslocal.push(dados);
    }
    window.localStorage.setItem('cadastro', JSON.stringify(dadoslocal));
    window.location.hash = '#home';

  } else if (!isValid) {
    alert('email inválido')
  } else if (senha.length <= 6) {
    alert('senha pequena')
  }
}


function register() {
  const template = `
  <section>
  <div class="container-cadastro">
          <img src="fotos/base.png" alt="Logo da Base" class='img-logo'>
          <div class="logo-cadastro">
            <h2>Preencha para se cadastrar</h2>
            <form class="cadastro">
              ${Input({ class: 'input-n', placeholder: 'Nome completo', type: 'text' })}
              ${Input({ class: 'input-e', placeholder: 'Email', type: 'email' })}
              ${Input({ class: 'input-s', placeholder: 'Senha', type: 'password' })}
              ${Button({ title: 'Cadastre-se', onClick: registerData, class: 'primary-button' })}              
              <p class='text'>Já é cadastrado? Então
              <a href='#home'> entre</a> para revolucionar!</p>
            </form>
          </div>
        </div>
      </section>
  `;

  return template;
}

export default register;
