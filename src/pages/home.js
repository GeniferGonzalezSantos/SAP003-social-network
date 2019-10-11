/* eslint-disable no-plusplus */
import Button from '../components/button.js';
import Input from '../components/input.js';


function pegarInput() {
  const logado = {
    email: document.querySelector('.js-email').value,
    senha: document.querySelector('.js-senha').value,
  };

  const usuario = JSON.parse(localStorage.getItem('arrayUsuarios'));
  console.log(usuario);

  if (window.validaLogin(usuario, logado)) {
    localStorage.setItem('logado', JSON.stringify(logado));
    console.log(logado);
    // window.location.hash = '#home';
  } else {
    window.alert('E-mail ou senha inválidos');
  }
}

function Login() {
  const template = `
  <h1>Home Page</h1>
  <p><a href= "#cadastro">Cadastre-se</a></p> 
  <form>
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
    ${Button({ id: '🎉', title: 'Login', onClick: pegarInput })}
  </form>
  `;
  return template;
}

export default Login;


window.validaLogin = (arrayUsuarios, logado) => {
  for (let i = 0; i < arrayUsuarios.length; i++) {
    if (logado.email === logado[i].email
        && logado.senha === logado[i].senha) {
      return true;
    }
  }
};

// const aray = [{email: "w@w", senha: "111"}, {email: "e@e", senha: "222"}, {email: "a@a", senha: "333"}]

// const user = {email: "w@w", senha: "111"}

// for (let i of aray) {
//   console.log(i.email === user.email && )
//   console.log()
// }
