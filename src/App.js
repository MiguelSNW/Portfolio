
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';     
import Dashboard from './views/Dashboard';    
import Formulario from './views/Formulario';         
import Vamonos from './views/Vamonos';

function App() {
  return (
    <div className="App">
    <Routes>
      {/* Vista principal */}
      <Route path="/" element={<Home />} /> {/* Ruta para el Home */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el Dashboard */}
      <Route path="/formulario" element={<Formulario />} /> {/* Ruta para el Dashboard */}
      <Route path="/vamonos" element={<Vamonos /> }/>
    </Routes>
  </div>
  );
  
}


export default App;
