import { useState, useEffect } from "react";
import Perfil from './sections/Perfil';
import Proyectos from './sections/Proyectos';
import Experiencia from './sections/Experiencia';
import MenuSticky from '../components/MenuSticky';
import Contactame from './sections/Contactame';
import '../index.css';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300); // espera antes de mostrar la página
          return 100;
        }
        return prev + 2;
      });
    }, 10); // animación fluida

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <p className="loader-text">Cargando...</p>
        <div className="loader-box">
          <div className="loader-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loader-percent">{progress}%</p>
      </div>
    );
  }

  return (
    <>
      <MenuSticky />
      <div className="scroll-container">
        <section id="perfil"><Perfil /></section>
        <section id="proyectos"><Proyectos /></section>
        <section id="nueva-seccion"><Experiencia /></section>
        <section id="contactame"><Contactame /></section>
      </div>
    </>
  );
}
