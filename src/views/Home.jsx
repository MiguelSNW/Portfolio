import Boton from '../components/Boton';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const irLogin = () => navigate('/Formulario');
  const irDashboard = () => navigate('/Dashboard');
  const irVamonos = () => navigate('/vamonos')

  const proyectos = [
    { id: 1, nombre: "Portfolio React", descripcion: "Portfolio personal hecho con React y Bootstrap.", url: "https://miguelangelgrande.es" },
    { id: 2, nombre: "Tienda Online", descripcion: "Ecommerce con Laravel y Vue.js.", url: "https://tiendaejemplo.com" },
    { id: 3, nombre: 'Vamonos', descripcion: 'Una buena patatita para ti', url: irVamonos},
  ];

  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Bienvenido a mi Portfolio</h1>
        <p className="lead text-secondary">Aquí irán mis proyectos, información y contacto.</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Boton className="btn btn-primary btn-lg" onClick={irLogin}>Iniciar sesión</Boton>
          <Boton className="btn btn-outline-primary btn-lg" onClick={irDashboard}>Ir al dashboard</Boton>
          <Boton className="btn btn-outline-primary btn-lg" onClick={irVamonos}>Ir al vamonos</Boton>
        </div>
      </header>

      <section>
        <h2 className="mb-4 text-center">Proyectos Destacados</h2>
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
    </div>
  );
}
