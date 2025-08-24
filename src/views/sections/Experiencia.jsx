import fondo from "../../assets/images/fondo1.jpg";
import ScrambledText from "../../assets/reactbits/ScrambledText";
export default function Experiencia() {
  return (
    <section
      className="scroll-section flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="contentEXP">
        <div className="izq">
          <h2>Tecnologías</h2>
          <div className="tecnologias">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
              alt="Java"
              title="Java"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              alt="JavaScript"
              title="JavaScript"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
              alt="React"
              title="React"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
              alt="Vue.js"
              title="Vue.js"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png"
              alt="PHP"
              title="PHP"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
              alt="Python"
              title="Python"
            />
            <img
              src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
              alt="HTML5"
              title="HTML5"
            />
            <img
              src="https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png"
              alt="CSS3"
              title="CSS3"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/462px-Laravel.svg.png"
              alt="Laravel"
              title="Laravel"
            />
            <img
              src="https://images.icon-icons.com/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png"
              alt="MySQL"
              title="MySQL"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png"
              alt="PostgreSQL"
              title="PostgreSQL"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              title="GitHub"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
              alt="Docker"
              title="Docker"
            />
          </div>
        </div>

        <div className="der">
          <h2>Experiencia Laboral</h2>
          <div className="trabajo">
            <ScrambledText
              className="scrambled-text-demo"
              radius={30}
              duration={2.5}
              speed={0.5}
              scrambleChars={".:"}
            >
              <h3>Desarrollador Full Stack - REGISOFT ™</h3>
              <p>
                <strong>20/03/2025 - 20/06/2025</strong>
              </p>
              <p>
                Diseño y desarrollo de aplicaciones web con Laravel y Vue.js,
                integración de APIs externas y despliegue en servidores
                internos.
              </p>
            </ScrambledText>
          </div>
        </div>
      </div>
    </section>
  );
}
