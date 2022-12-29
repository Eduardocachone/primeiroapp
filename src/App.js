import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/comtato/contatos';
import Comentarios from './pages/comentarios/comentarios';
import Fotos from './pages/fotos/foto';



function App() {
  return (
    <div id='todoconteudo'>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/contato'  element={<Contato/>}/>
          <Route path='fotos' element={<Fotos/>}/>
          <Route path='/comentarios'  element={<Comentarios/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
