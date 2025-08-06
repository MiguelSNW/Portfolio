import Perfil from './sections/Perfil';
import Proyectos from './sections/Proyectos';
import NuevaSeccion from './sections/NuevaSeccion';
import MenuSticky from '../components/MenuSticky';
import '../index.css'; // o './App.css' según corresponda


export default function Home() {
  const proyectos = [
    { id: 1, nombre: "Portfolio React", descripcion: "Portfolio personal hecho con React y Bootstrap.", url: "https://miguelangelgrande.es" },
    { id: 2, nombre: "Tienda Online", descripcion: "Ecommerce con Laravel y Vue.js.", url: "https://tiendaejemplo.com" },
  ];

  return (
    <>
      <MenuSticky />
      <div className="scroll-container">
        <section id="perfil"><Perfil/></section>
        <section id="proyectos"><Proyectos proyectos={proyectos} /></section>
        <section id="nueva-seccion"><NuevaSeccion /></section>
      </div>
    </>
  );
}
