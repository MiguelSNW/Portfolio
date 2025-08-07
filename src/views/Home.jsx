import Perfil from './sections/Perfil';
import Proyectos from './sections/Proyectos';
import Experiencia from './sections/Experiencia';
import MenuSticky from '../components/MenuSticky';
import '../index.css'; // o './App.css' según corresponda
import Contactame from './sections/Contactame';


export default function Home() {


  return (
    <>
      <MenuSticky />
      <div className="scroll-container">
        <section id="perfil"><Perfil/></section>
        <section id="proyectos"><Proyectos/></section>
        <section id="nueva-seccion"><Experiencia /></section>
        <section id="contactame"><Contactame /></section>
      </div>
    </>
  );
}
