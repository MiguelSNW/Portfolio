
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';     

function App() {
  return (
    <div className="App">
    <Routes>
      {/* Vista principal */}
      <Route path="/" element={<Home />} /> {/* Ruta para el Home */}
    </Routes>
  </div>
  );
  
}


export default App;
