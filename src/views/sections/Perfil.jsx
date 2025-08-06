import fotoPerfil from '../../assets/imagen.jpg';
import fondo from '../../assets/fondo1.jpg';
import GridDistortion from '../../components/GridDistortion';
import BlurText from "../../components/BlurText.js";



export default function Perfil() {
  return (
    <section className="scroll-section header-container fondo-perfil">
      
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <GridDistortion
          imageSrc={fondo}
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
      </div>
         <div className="header-image-container">
        <a
    href="http://www.linkedin.com/in/miguel-ángel-grande-sánchez-969abb187" // ← usa tu usuario real
    target="_blank"
    rel="noopener noreferrer"
  >
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="header-image"
        /></a>
      </div>

      <div className="header-text">
        <h1 className="display-4 fw-bold header-title">
          Miguel Ángel Grande Sánchez
        </h1>
        
     <p className="lead header-description">
<BlurText
  text="Especializado en creación de Aplicaciones Web escalables"
  delay={100}          // aparece 1 segundo después del primero
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/>
</p>

      </div>

   
    </section>
  );
}
