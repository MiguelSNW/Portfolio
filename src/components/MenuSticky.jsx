import ShinyText from "../assets/reactbits/ShinyText";

export default function MenuSticky() {
  const handleClick = (e, id) => {
    e.preventDefault(); // Evita el salto instantáneo
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="menu-sticky">
      <a href="#perfil" onClick={(e) => handleClick(e, "perfil")}>
        <ShinyText text="Perfil" disabled={false} speed={3} className="custom-class" />
      </a>
      <a href="#proyectos" onClick={(e) => handleClick(e, "proyectos")}>
        <ShinyText text="Proyectos" disabled={false} speed={3} className="custom-class" />
      </a>
      <a href="#nueva-seccion" onClick={(e) => handleClick(e, "nueva-seccion")}>
        <ShinyText text="Experiencias" disabled={false} speed={3} className="custom-class" />
      </a>
    </nav>
  );
}
