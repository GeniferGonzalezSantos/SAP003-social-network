import logar from './pages/home.js';
import cadastrar from './pages/cadastro.js';
import feed, { salvar } from './pages/feed.js';


function init() {
  document.querySelector('main').innerHTML = logar();
}

window.addEventListener('load', init);

function locationHashChanged() {
  switch (window.location.hash) {
    case '#cadastrar':
      document.querySelector('main').innerHTML = cadastrar();
      break;
    case '#home':
      document.querySelector('main').innerHTML = logar();
      salvar();
      break;
    case '#feed':
      document.querySelector('main').innerHTML = feed();
      break;
    default:
      document.querySelector('main').innerHTML = logar();
  }
}

window.addEventListener('hashchange', locationHashChanged, false);
