import Folder from '../../assets/reactbits/Folder';
import { useState } from "react";
import Modal from '../../components/Modal';
import GameHub from '../../assets/images/Proyecto1.png'
import Construccion from '../../assets/images/proyecto2.jpg'

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
    }, 300); // misma duración que la animación
  };

  const proyectos = [
    {
      imageUrl: GameHub,
      text: 'GAMEHUB',
      description: 'Tienda online con temática de videojuegos. Realizada con Vue.js como frontend y Laravel PHP como backend, usando API REST.',
      buttonText: 'Ver Proyecto',
      onButtonClick: () => window.open('https://ieslamarisma.net/proyectos/2025/miguelangelgrande/GameHub/frontend/', '_blank'),
    },
    {
      imageUrl: Construccion,
      text: 'Gestor de Tareas',
      description:'Gestor simple de tareas. Organización y supervisión de tareas empresariales. Realizada con Blade Tailwind para el Frontend y Laravel para el backend.',
      buttonText: 'Ver Proyecto',
      onButtonClick: () => window.open('https://proyecto2.com', '_blank'),
    },
    
    
  ];

  return (
    <section className="scroll-section d-flex justify-content-center align-items-center">
      {/* Carpeta: al hacer click abre el modal */}
      <div onClick={abrirModal}>
        <Folder size={2} color="#5227FF" className="custom-folder" />
      </div>

      {/* Modal con fondo oscuro y cards de proyectos */}
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