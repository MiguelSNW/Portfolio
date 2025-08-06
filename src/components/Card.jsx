

export function Card({ imageUrl, text, description, buttonText, onButtonClick }) {
  return (
    <div className="card" style={{ width: '18rem', fontFamily: "'Inter', sans-serif", background: '#25282cff', marginTop: '50px', marginLeft:'45px', border: '1px solid white' }}>
      <img className="card-img-top" src={imageUrl} alt="..." />
      <div className="card-body">
        <p className="card-text" style={{fontFamily: "'Bungee', sans-serif", color:'white' }}>{text}</p>
        <p className="card-description">{description}</p>
        <button
          onClick={onButtonClick}
          className="button-card"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
