import Button from '../components/button.js';
import Input from '../components/input.js';

function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  const dados = JSON.parse(localStorage.getItem('cadastro'));
  const logado = dados.filter((d) => {
    if (d.email === email && d.senha === senha) {
      console.log(d)
      return d;
    }
    return null;
  })[0];

  logado ? (
    localStorage.setItem('usuario', JSON.stringify(logado.id)),
    window.location.hash = '#feed'
  ) : (document.getElementById('erro').innerHTML = 'Usuario ou senha invalido!')
    
}

function logar() {
  const template = `
  <section>
        <div class="container-login">
          <img src="fotos/base.png" alt="">
          <div class="titulo">
            <h1 id="title">Base Sustentabilidade</h1>
            <p id="erro" class="erro"></p>
            <form class="form">
              ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
              ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
              ${Button({ title: 'Login', onClick: pegarInput })}
            </form>
            <p class = "ajuste">Você já possui conta? Não, então <a href='#cadastrar'>cadastre-se</a> aqui!</p>
          </div>
        </div>
      </section>
`;

  return template;
}

export default logar;
