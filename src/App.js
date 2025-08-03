
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';     
import Dashboard from './views/Dashboard';    
import Formulario from './views/Formulario';         


function App() {
  return (
    <Routes>
      {/* Vista principal */}
      <Route path="/" element={<Home />} /> {/* Ruta para el Home */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el Dashboard */}
      <Route path="/formulario" element={<Formulario />} /> {/* Ruta para el Dashboard */}
    </Routes>
  );
}


export default App;
