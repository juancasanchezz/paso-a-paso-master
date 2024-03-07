import React, { useState, useEffect } from 'react';
import style from '../style/ListaRutas.module.css';
import Modal from './Modal'; // Asegúrate de importar el componente Modal

const ListaRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [rutaExpandida, setRutaExpandida] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    const obtenerRutasDesdeBackend = async () => {
      try {
        const data = [
          { id: 1, nombre: 'Ruta 1', ubicacion: 'Ubicación 1', kilometros: 10, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.' },
          { id: 2, nombre: 'Ruta 2', ubicacion: 'Ubicación 2', kilometros: 15, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.' },
          { id: 3, nombre: 'Ruta 3', ubicacion: 'Ubicación 2', kilometros: 15, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.' },
          { id: 4, nombre: 'Ruta 4', ubicacion: 'Ubicación 2', kilometros: 15, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.' },
          // ... más rutas
        ];

        setRutas(data);
      } catch (error) {
        console.error('Error al obtener las rutas:', error);
      }
    };

    obtenerRutasDesdeBackend();
  }, []);

  const manejarExpansion = (id) => {
    setRutaExpandida((prevId) => (prevId === id ? null : id));
    setModalAbierto(true);
  };


  return (
    <div className={`rutas ${rutaExpandida !== null ? style.listaRutasExpandida : ''}`}>
      <h2>Lista de Rutas</h2>
      <ul className={`${style.listaRutas} ${rutaExpandida !== null ? style.listaRutasExpandida : ''}`}>
        {rutas.map((ruta) => (
          <li style={{width: "30%"}} key={ruta.id} className={`${style.listaRutasItem} ${rutaExpandida === ruta.id ? style.expandida : ''}`}>
            <div className={style.rutaCabecera} onClick={() => manejarExpansion(ruta.id)}>
            <p style={{fontSize: "18px"}}><b>{ruta.nombre}</b></p>
            <p>{ruta.ubicacion}</p>
            <p>{`${ruta.kilometros} km`}</p>
            </div>
            {rutaExpandida === ruta.id && modalAbierto && (
              <Modal cerrarModal={() => setModalAbierto(false)}>
                {/* Contenido para mostrar en la tarjeta una vez expandida */}
                <p style={{paddingTop: "2rem", color: "#ddd"}}>{ruta.descripcion}</p>
              </Modal>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
          }

export default ListaRutas;
