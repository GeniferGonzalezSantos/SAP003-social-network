import Input from '../components/input.js';
import Button from '../components/button.js';

function pegarInput() {
  let dadoslocal = JSON.parse(localStorage.getItem('cadastro'));
  const validateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value

  const isValid = email.match(validateEmail);
 
  if(isValid && senha.length >= 6){
    const dados = {
      email,
      nome: document.querySelector('.js-nome').value,
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
  } else if (senha.length <= 6){
    alert('senha pequena')

  }


}


function cadastrar() {
  const template = `
  <section>
  <div class="container-cadastro">
          <img src="fotos/base.png" alt="">
          <div class="logo-cadastro">
            <h1 id="title">Base Sustentabilidade</h1>
            <h2>Preencha para se cadastrar</h2>
            <form class="cadastro">
              ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
              ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
              ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
              ${Button({ title: 'Cadastre-se', onClick: pegarInput })}
              <p class='text'>Já é cadastrado? Então
              <a href='#home'> entre</a> para revolucionar!</p>
            </form>
          </div>
        </div>
      </section>
  `;

  return template;
}

export default cadastrar;
