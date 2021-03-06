import Button from '../components/button.js';
import Input from '../components/input.js';

function login() {
  const email = document.querySelector('.input-e').value;
  const senha = document.querySelector('.input-s').value;
  const dados = JSON.parse(localStorage.getItem('cadastro'));
  const logado = dados.filter((d) => {
    if (d.email === email && d.senha === senha) {
      console.log(d)
      return d;	     
    }	   
    return null;	   
  })[0];	 


  document.addEventListener('keypress', function (e) {
    (e.which == 13) ? login() : false;
  });

  if (logado) {
    localStorage.setItem('usuario', JSON.stringify(logado.id));
    window.location.hash = '#feed';
    return true;
  }
  document.getElementById('erro').innerHTML = alert('Usuario ou senha invalido!');
  return false;	
}	


function logar() {
  const template = `
  <section>
        <div class='container-login'>
          <img src='fotos/base.png' alt='Logo da Base' class='img-logo'>
          <div class='titulo'>
            <h1 id='title'>Base Sustentabilidade</h1>
            <form class='form' >
              ${Input({ class: 'input-e', placeholder: 'Email', type: 'email' })}
              ${Input({ class: 'input-s', placeholder: 'Senha', type: 'password' })}
              ${Button({ class: 'primary-button', title: 'Login', type: 'submit', onClick: login })}
            </form>
            <p class = 'p-cadastro'>Você já possui conta? Não, então 
            <a href='#cadastrar'>cadastre-se</a> aqui!</p>
          </div>
        </div>
      </section>
`;

  return template;
}

export default logar;
