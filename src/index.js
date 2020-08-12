import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './components/Styles/Global.css';
import InsigniaNueva from './pages/InsigniaNueva.jsx'



ReactDOM.render(
  <React.StrictMode>
    <InsigniaNueva/>
  </React.StrictMode>,
  document.getElementById('root')
  );
// CODIGO.JSX

/* const JSX = <h1>Hola,estudiantes de la media </h1>

const container = document.getElementById('root')

ReactDOM.render(
  JSX,
  container
) */

//ALTERNATIVA.REAC.JS

/* const elemento = React.createElement('h1',{}, 'hola,estudiantes de la media');
const container = document.getElementById('root');

ReactDOM.render(
  elemento,
  container
) */

/* const elemento = React.createElement('a',{href:'https://github.com/Ximelopez06'},'Github');
const container = document.getElementById('root')

ReactDOM.render(
  elemento,
  container
) */

//.JSX

/* const name = 'Caro'
const JSX = <h1>Hola,soy {name}</h1>
const container = document.getElementById('root');

ReactDOM.render(
  JSX,
  container
) */

/* const name = 'Xime'
const elemento = React.createElement('h1',{},` Hola, soy ${name}`);
const container = document.getElementById('root')

ReactDOM.render(
  elemento,
  container
) */

//JSX

/* const JSX = <h1>Hola,el resultado de la suma: {2+2}</h1>
const container = document.getElementById('root');
ReactDOM.render(
  JSX,
  container
) */

/* const suma = () => 3+3
const JSX = <h1>Hola, el resultado de la suma es: {suma()}</h1>
const container = document.getElementById('root');

ReactDOM.render(
  JSX,
  container
) */

/* const JSX = <div>
  <h1>
    hola mundo
  </h1>
  <p>
    soy desarrolladora FrontEnd
  </p>
</div>

const container = document.getElementById('root');

ReactDOM.render(
  JSX,
  container
) */

/* const elemento = React.createElement(
  'div',
  {},
  React.createElement('h1',{},'Hola mundo'),
  React.createElement('p', {}, 'Soy desarrolladora FrontEnd')
)
const container = document.getElementById('root')

ReactDOM.render(
  elemento,
  container
) */