import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Asegúrate de importar el componente Modal
import styles from '../index.module.css'

import { GiBootPrints } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";
import axios from 'axios';



const ListaRutas = () => {
  const [rutas, setRutas] = useState({});
  const [rutaExpandida, setRutaExpandida] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rutasVisibles, setRutasVisibles] = useState(2);
  const [haExpandido, setHaExpandido] = useState(false);
  const [rutasGuardadas, setRutasGuardadas] = useState([]);
  const [animacionGuardar, setAnimacionGuardar] = useState(false);
  const [animacionMostrar, setAnimacionMostrar] = useState(false);


  /* const data = [
    {
      id: 1,
      nombre: "Ruta 1",
      ubicacion: "Ubicación 1",
      kilometros: 10,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 2,
      nombre: "Ruta 2",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 3,
      nombre: "Ruta 3",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 4,
      nombre: "Ruta 4",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 5,
      nombre: "Ruta 5",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 6,
      nombre: "Ruta 6",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 7,
      nombre: "Ruta 6",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 8,
      nombre: "Ruta 6",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    {
      id: 9,
      nombre: "Ruta 6",
      ubicacion: "Ubicación 2",
      kilometros: 15,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar faucibus velit ut auctor. Duis ut pretium justo. Nam sed risus ornare, congue orci in, venenatis dolor. Proin sed cursus lectus. Morbi elit neque, mattis sed nunc eget, hendrerit porttitor ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, magna luctus viverra vestibulum, ipsum tellus pulvinar enim, vitae varius ante nisl at tellus.",
    },
    // ... más rutas
  ]; */

  const getRutas = async () => {
    try {
      const response = await fetch('../backend/routes/rutas.json').then((data) => data.json().then(data));

      setRutas(response.features);
    } catch (error) {
      console.error('Error al traer los datos:', error);
    };
  }


  useEffect(() => {
    setHaExpandido(true);
    getRutas();
  }, []);

  useEffect(() => {
    if (rutasVisibles <= 2) {
      setHaExpandido(false);
    } else {
      setHaExpandido(true);
    }
  }, [rutasVisibles]);

  const manejarExpansion = (id) => {
    setRutaExpandida((prevId) => (prevId === id ? null : id));
    setModalAbierto(true);
  };
  // console.log(rutasVisibles);

  /* Funcion para mostrar las rutas de dos en dos */
  const cargarMasRutas = () => {
    setRutasVisibles((prev) => prev + 2);
  };
  const cargarMenosRutas = () => {
    setRutasVisibles((prev) => prev - 2);
  };

  // Función para guardar una ruta en la lista de rutas guardadas
  const guardarRuta = (ruta) => {

    // Verificar si la ruta ya está guardada
    const rutaIndex = rutasGuardadas.findIndex((r) => r.id === ruta.id);

    if (rutaIndex !== -1) {
      // Si la ruta ya está guardada, eliminarla de la lista
      setRutasGuardadas((prevRutas) =>
        prevRutas.filter((r) => r.id !== ruta.id)
      );
      setAnimacionGuardar(true);
    } else {
      // Si la ruta no está guardada, agregarla a la lista
      setRutasGuardadas((prevRutas) => [...prevRutas, ruta]);
      // Activar la animación
      setAnimacionGuardar(true);
    }
    // Desactivar la animación después de un tiempo
    setTimeout(() => {
      setAnimacionGuardar(false);
    }, 300);
  };

  const mostrarRutasGuardadas = () => {
    // Lógica para mostrar la lista de rutas guardadas
    // Puedes mostrarla en un Modal, en una nueva sección de la interfaz, etc.
    setAnimacionMostrar(true);
    setTimeout(() => {
      setAnimacionMostrar(false);
    }, 300);
    console.log("Rutas guardadas:", rutasGuardadas);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setRutaExpandida(null)
  }

  return (
    <div className={styles.indexRutas}>
      <div
        className={`${styles.rutas} ${rutaExpandida !== null ? styles.listaRutasExpandida : ""
          }`}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              width: "20rem",
              textDecoration: "none",
              fontSize: "30px",
              marginTop: "10px",
              color: "black",
              textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
              textUnderlineOffset: '7px',
              /* borderRadius: "5px ",
              background: "linear-gradient(#556B2F, #fff) border-box", */
            }}
          >
            Lista de Rutas
          </p>
        </div>
        <ul className={`${styles.listaRutas} ${styles.listaRutasExpandida}`}>
          {Object.keys(rutas).slice(0, rutasVisibles).map((key) => {
            const ruta = rutas[key];
            return (

              <li
                style={{
                  width: "30%",
                  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
                }}
                key={ruta.id}
                className={`${styles.listaRutasItem} ${rutaExpandida === ruta.id ? styles.expandida : ""
                  }`}
              >
                <div
                  className={styles.rutaTarjeta}
                  onClick={() => manejarExpansion(ruta.id)}
                >
                  <p style={{ fontSize: "18px" }}>
                    <b>{ruta.attributes.ID}</b>
                  </p>
                  <p style={{ fontSize: "18px" }}>Dificultad: {ruta.attributes.DIFICULTAD}</p>
                  <p style={{ fontSize: "18px" }}>Fecha: {ruta.attributes.FECHA}</p>
                </div>

                {rutaExpandida === ruta.id && modalAbierto && (
                  <>
                    <Modal
                      cerrarModal={cerrarModal}
                      style={{
                        transition: 'all 3s ease-out'
                      }}
                    >
                      {/* Contenido para mostrar en la tarjeta una vez expandida */}
                      <p
                        style={{
                          paddingTop: "2rem",
                          color: "#837c7c"
                        }}
                      >
                        {ruta.descripcion}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          padding: '5px',
                          transition: 'all 3s ease-out',
                          marginTop: '20px'
                        }}>
                        <FiBookmark
                          onClick={() => guardarRuta(rutas.find(ruta => ruta.id === rutaExpandida))}
                          style={{
                            width: '127.7px',
                            height: '26px',
                            cursor: 'pointer',
                            transform: animacionGuardar ? 'scale(1.2)' : 'scale(1)', color:
                              '#837c7c'
                          }} />
                        {/* Botón para mostrar las rutas guardadas */}
                        <GiBootPrints
                          style={{
                            width: '127.7px',
                            height: '26px',
                            color: '#837c7c',
                            transform: animacionMostrar ? 'scale(1.2)' : 'scale(1)'
                          }}
                          onClick={mostrarRutasGuardadas} />
                      </div>
                    </Modal>
                  </>
                )}
              </li>
            )

          })}
        </ul>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {rutasVisibles < rutas.length && (
          <button
            style={{
              padding: "0.4rem",
              borderRadius: "5px",
              border: "0.2px solid #000",
              background: "linear-gradient(#556B2F, #fff) border-box",
              marginLeft: "10px",
              marginBottom: '10px',
              fontSize: "11px",
              fontFamily: "Poppins",
            }}
            className="btnRutas"
            onClick={cargarMasRutas}
          >
            Ver más
          </button>
        )}
        {haExpandido && (
          <button
            style={{
              padding: "0.4rem",
              borderRadius: "5px",
              border: "0.2px solid #000",
              background: "linear-gradient(#556B2F, #fff)",
              marginLeft: "10px",
              marginBottom: '10px',
              fontSize: "11px",
              fontFamily: "Poppins",
            }}
            className="btnRutas"
            onClick={cargarMenosRutas}
          >
            Ver menos
          </button>
        )}
      </div>
    </div >
  );
};

export default ListaRutas;
