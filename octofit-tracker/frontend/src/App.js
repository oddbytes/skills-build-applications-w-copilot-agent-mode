
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" className="octofit-logo me-2" />
            OctoFit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Actividades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Equipos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        {/* Bootstrap Heading */}
        <h1 className="display-4 mb-4 text-primary">Bienvenido a OctoFit Tracker</h1>

        {/* Bootstrap Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top p-4" alt="logo" style={{height: '180px', objectFit: 'contain'}} />
              <div className="card-body">
                <h5 className="card-title">Tu progreso</h5>
                <p className="card-text">Consulta tus actividades y mejora cada día.</p>
                <a href="#" className="btn btn-primary">Ver actividades</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Equipos</h5>
                <p className="card-text">Únete a un equipo y compite en el leaderboard.</p>
                <a href="#" className="btn btn-success">Ver equipos</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Workouts</h5>
                <p className="card-text">Descubre rutinas personalizadas para ti.</p>
                <a href="#" className="btn btn-warning">Ver workouts</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Table */}
        <div className="mb-4">
          <h2 className="h4 mb-3">Leaderboard</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>Puntos</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Marvel</td>
                <td>1200</td>
                <td><button className="btn btn-sm btn-outline-primary">Ver</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>DC</td>
                <td>1100</td>
                <td><button className="btn btn-sm btn-outline-primary">Ver</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bootstrap Form */}
        <div className="mb-4">
          <h2 className="h4 mb-3">Registrar nueva actividad</h2>
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="tipo" className="form-label">Tipo</label>
              <input type="text" className="form-control" id="tipo" placeholder="Ej: Running" />
            </div>
            <div className="col-md-4">
              <label htmlFor="duracion" className="form-label">Duración (min)</label>
              <input type="number" className="form-control" id="duracion" />
            </div>
            <div className="col-md-4">
              <label htmlFor="fecha" className="form-label">Fecha</label>
              <input type="date" className="form-control" id="fecha" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success">Registrar</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowModal(true)}>Ayuda</button>
            </div>
          </form>
        </div>

        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Ayuda</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Completa el formulario para registrar una nueva actividad. Todos los campos son obligatorios.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bootstrap Link */}
        <div className="mt-5">
          <a href="https://react-bootstrap.github.io/" className="btn btn-link">Ver documentación de Bootstrap</a>
        </div>
      </div>
    </div>
  );
}

export default App;
