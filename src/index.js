import React from 'react';
import ReactDOM from 'react-dom';
import Saudacao from "./Saudacao";


ReactDOM.render(
  <React.StrictMode>
    <Saudacao nome="Felipe" tipo="Boa tarde"></Saudacao>
  </React.StrictMode>,
  document.getElementById('root')
);
