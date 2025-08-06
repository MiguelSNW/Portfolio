import { Card } from "./Card";


export default function Modal({ cards = [], onClose }) {
  return (
    <div className="modal-contenedor">
      <div className="aviso-construccion">
        🚧 Algún Proyecto puede estar en construcción 🚧
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