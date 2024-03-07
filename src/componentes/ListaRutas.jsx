import React, { useState, useEffect } from 'react';
import '../style/ListaRutas.css'

const ListaRutas = () => {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    // Simulación de datos iniciales o carga desde el backend
    const obtenerRutasDesdeBackend = async () => {
      try {
        // Simulación de datos iniciales
        const data = [
          { id: 1, nombre: 'Ruta 1', ubicacion: 'Ubicación 1', kilometros: 10, descripcion: 'Descripción de la Ruta 1' },
          { id: 2, nombre: 'Ruta 2', ubicacion: 'Ubicación 2', kilometros: 15, descripcion: 'Descripción de la Ruta 2' },
          // ... más rutas
        ];

        setRutas(data);
      } catch (error) {
        console.error('Error al obtener las rutas:', error);
      }
    };

    obtenerRutasDesdeBackend();
  }, []);

  const [rutaExpandida, setRutaExpandida] = useState(null);

  const manejarExpansion = (id) => {
    setRutaExpandida((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <h2>Lista de Rutas</h2>
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta.id} className={rutaExpandida === ruta.id ? 'expandida' : ''}>
            <div className="ruta-cabecera" onClick={() => manejarExpansion(ruta.id)}>
              <strong>{ruta.nombre}</strong>
              <p>{ruta.ubicacion}</p>
              <p>{`${ruta.kilometros} km`}</p>
            </div>
            {rutaExpandida === ruta.id && (
              <div className="ruta-detalle">
                <p>{ruta.descripcion}</p>
                {/* Agrega más detalles según sea necesario */}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRutas;
