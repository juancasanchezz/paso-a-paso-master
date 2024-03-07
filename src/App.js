import React from 'react';
import Navbar from './componentes/Navbar';
import FormularioRutas from './componentes/FormularioRutas';
import './App.css'
import ListaRutas from './componentes/ListaRutas';

function App () {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <ListaRutas />
      <FormularioRutas />
    </div>
  );
}

export default App;
