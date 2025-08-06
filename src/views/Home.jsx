import Perfil from './sections/Perfil';
import Proyectos from './sections/Proyectos';
import NuevaSeccion from './sections/NuevaSeccion';
import MenuSticky from '../components/MenuSticky';
import '../index.css'; // o './App.css' según corresponda


export default function Home() {


  return (
    <>
      <MenuSticky />
      <div className="scroll-container">
        <section id="perfil"><Perfil/></section>
        <section id="proyectos"><Proyectos/></section>
        <section id="nueva-seccion"><NuevaSeccion /></section>
      </div>
    </>
  );
}
