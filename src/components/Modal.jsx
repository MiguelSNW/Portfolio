import { Card } from "./Card";


export default function Modal({ cards = [], onClose }) {
  return (
    <div className="modal-contenedor">
      <div>
        Mis Proyectos personales
      </div>

      <div className="cards-container">
        {cards.map((cardData, index) => (
          <Card
            key={index}
            imageUrl={cardData.imageUrl}
            text={cardData.text}
            description={cardData.description}
            buttonText={cardData.buttonText}
            onButtonClick={cardData.onButtonClick}
          />
        ))}
      </div>
      <button className="btn-salir" onClick={onClose}>
        Salir
      </button>
    </div>
  );
}