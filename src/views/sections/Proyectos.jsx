export default function Proyectos({ proyectos }) {
  return (
    <section className="scroll-section container">
      <h2 className="mb-4 text-center">Mis Proyectos</h2>
      <div className="row">
        {proyectos.map(({ id, nombre, descripcion, url }) => (
          <div key={id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text flex-grow-1">{descripcion}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-auto"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
