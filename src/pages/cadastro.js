import Input from '../components/input.js';
import Button from '../components/button.js';


function pegarInput() {
  const dados = {
    email: document.querySelector('.js-email').value,
    nome: document.querySelector('.js-nome').value,
    senha: document.querySelector('.js-senha').value,
  };

  // window.localStorage.setItem('usuario', JSON.stringify(dados));
  // arrayUsuarios.push(dados);
  let usuarios = localStorage.getItem('arrayUsuarios');
  usuarios = JSON.parse(usuarios);
  if (!Array.isArray(usuarios)) {
    usuarios = [usuarios];
  }
  usuarios.push(dados);
  localStorage.setItem('arrayUsuarios', JSON.stringify(usuarios));
  localStorage.setItem('usuarioLogado', JSON.stringify(dados));
  window.location.hash = '#Login';
}


function Cadastro() {
  const template = `
  <h1><a href='#login'>Login</a></h1>
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}

  `;
  return template;
}

function locationHashChanged() {
  if (location.hash === '#cadastro') {
    document.querySelector('main').innerHTML = Cadastro();
  } else if (location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener('hashchange', locationHashChanged, false);


export default Cadastro;
