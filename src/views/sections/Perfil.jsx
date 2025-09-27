import fotoPerfil from "../../assets/images/imagen.jpg";
import fondo from "../../assets/images/fondo1.jpg";
import BlurText from "../../assets/reactbits/BlurText.js";
import GradientText from "../../assets/reactbits/GradientText.js";
import ShinyText from "../../assets/reactbits/ShinyText.js";
import linkedn from "../../assets/images/linkedn.png";

export default function Perfil() {
  return (
    <section
      className="scroll-section header-container"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="header-image-container">
        <a
          href="http://www.linkedin.com/in/miguel-ángel-grande-sánchez-969abb187"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fotoPerfil} alt="Foto de perfil" className="header-image" />
        </a>

        <a href="http://www.linkedin.com/in/miguel-ángel-grande-sánchez-969abb187">
          <div className="open-to-work-text">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              OPEN TO WORK!
            </GradientText>
          </div>
        </a>
      </div>

      <div className="header-text">
        <h1 className="display-4 fw-bold header-title">
          Miguel Ángel Grande Sánchez
        </h1>

        <div className="lead header-description">
          <BlurText
            text="Desarrollador Web especializado en la creación de aplicaciones web escalables."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
          />
        </div>

        <div className="lead header-description2">
          <p>Sevilla, España 🇪🇸.</p>
        </div>

        <div className="button-container">
          <a
            href="http://www.linkedin.com/in/miguel-ángel-grande-sánchez-969abb187"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyText
              text="Linkedn"
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <img src={linkedn} alt="LinkedIn" className="icono-red" />
          </a>

          <a
            href="mailto:miguelgrandeprogramador@email.com?subject=Contacto desde el portfolio&body=Hola Miguel Ángel, me interesa..."
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyText
              text="Escríbeme"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
