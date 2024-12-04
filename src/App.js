import React from 'react'
import './global.css';
import Home from './Pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acesso from './Pages/Acesso/Acesso.jsx';
import PaginaSistema from './Pages/PaginaSistema/PaginaSistema.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/acesso" element={<Acesso />}/>
          <Route path='/Sistema/:categoria' element={<PaginaSistema />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
