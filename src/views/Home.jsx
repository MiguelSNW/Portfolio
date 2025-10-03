import Perfil from "./sections/Perfil";
import Proyectos from "./sections/Proyectos";
import Experiencia from "./sections/Experiencia";
import MenuSticky from "../components/MenuSticky";

import "../index.css";

export default function Home() {
  return (
    <>
      <MenuSticky />
      <div className="scroll-container">
        <section id="perfil">
          <Perfil />
        </section>
        <section id="proyectos">
          <Proyectos />
        </section>
        <section id="nueva-seccion">
          <Experiencia />
        </section>
      </div>
    </>
  );
}
