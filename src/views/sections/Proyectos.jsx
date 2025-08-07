import Folder from '../../assets/reactbits/Folder';
import { useState } from "react";
import Modal from '../../components/Modal';
import GameHub from '../../assets/images/Proyecto1.png'
import Construccion from '../../assets/images/proyecto2.jpg'
import GradientText from '../../assets/reactbits/GradientText';
import fondo from '../../assets/images/fondo1.jpg';

export default function Proyectos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const proyectos = [
  {
    imageUrl: GameHub,
    text: 'GAMEHUB',
    description: (
      <>
        Tienda online. Realizada con
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Vue.js
        </GradientText>{' '}
        como frontend y{' '}
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Laravel PHP
        </GradientText>{' '}
        como backend, usando API REST.
      
      </>
    ),
    buttonText: 'Ver Proyecto',
    onButtonClick: () =>
      window.open(
        'https://ieslamarisma.net/proyectos/2025/miguelangelgrande/GameHub/frontend/',
        '_blank'
      ),
  },
  {
    imageUrl: Construccion,
    text: 'PortFolio',
    description: (
      <>
       Portfolio realizado puramente con
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          React
        </GradientText>{' '}
        centrándome en la fluidez y experiencia del usuario.
      </>
    ),
    buttonText: 'Ver Proyecto',
    onButtonClick: () => window.open('https://www.miguelangelgrande.es/', '_blank'),
  },
];

  return (
    <section className="scroll-section d-flex justify-content-center align-items-center flex-column proyectos-section"  style={{
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
  }}>
      <div onClick={abrirModal} className="folder-container">
        <Folder size={2} color="#5227FF" className="custom-folder" />
      </div>

      <div className="proyectos-text">
        Mis Proyectos
      </div>

      {modalOpen && (
        <div
          className={`modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}
          onClick={cerrarModal}
        >
          <div
            className={`modal-content ${isClosing ? 'scale-out' : 'scale-in'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Modal cards={proyectos} onClose={cerrarModal} />
          </div>
        </div>
      )}
    </section>
  );
}
