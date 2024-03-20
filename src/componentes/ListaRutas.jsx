import React, { useState, useEffect } from "react";
import style from "../style/listaRutas.module.css";
import Modal from "./Modal"; // Asegúrate de importar el componente Modal

import { FiBookmark } from "react-icons/fi";



const ListaRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [rutaExpandida, setRutaExpandida] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rutasVisibles, setRutasVisibles] = useState(2);
  const [haExpandido, setHaExpandido] = useState(false);
  const [rutasGuardadas, setRutasGuardadas] = useState([]);
  const [animacionActiva, setAnimacionActiva] = useState(false);

  useEffect(() => {
    const obtenerRutas = async () => {
      try {
        const data = [
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
          // ... más rutas
        ];

        setRutas(data);
      } catch (error) {
        console.error("Error al obtener las rutas:", error);
      }
    };
    setHaExpandido(true);

    obtenerRutas();
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
      setAnimacionActiva(true);
    } else {
      // Si la ruta no está guardada, agregarla a la lista
      setRutasGuardadas((prevRutas) => [...prevRutas, ruta]);
      // Activar la animación
      setAnimacionActiva(true);
    }
    // Desactivar la animación después de un tiempo (por ejemplo, 500ms)
    setTimeout(() => {
      setAnimacionActiva(false);
    }, 300);
  };

  const mostrarRutasGuardadas = () => {
    // Lógica para mostrar la lista de rutas guardadas
    // Puedes mostrarla en un Modal, en una nueva sección de la interfaz, etc.
    console.log("Rutas guardadas:", rutasGuardadas);
  };

  return (
    <div className="indexRutas">
      <div
        className={`rutas ${rutaExpandida !== null ? style.listaRutasExpandida : ""
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
              width: "200px",
              textDecoration: "none",
              fontSize: "27px",
              marginTop: "10px",
              color: "black",
              /* borderRadius: "5px ",
              background: "linear-gradient(#556B2F, #fff) border-box", */
            }}
          >
            Lista de Rutas
          </p>
        </div>
        <ul className={`${style.listaRutas} ${style.listaRutasExpandida}`}>
          {rutas.slice(0, rutasVisibles).map((ruta) => (
            <li
              style={{ width: "30%" }}
              key={ruta.id}
              className={`${style.listaRutasItem} ${rutaExpandida === ruta.id ? style.expandida : ""
                }`}
            >
              <div
                className={style.rutaCabecera}
                onClick={() => manejarExpansion(ruta.id)}
              >
                <p style={{ fontSize: "18px" }}>
                  <b>{ruta.nombre}</b>
                </p>
                <p>{ruta.ubicacion}</p>
                <p>{`${ruta.kilometros} km`}</p>
              </div>
              {/* Botón para mostrar las rutas guardadas */}
              <button onClick={mostrarRutasGuardadas}>
                Mostrar Rutas Guardadas
              </button>
              {rutaExpandida === ruta.id && modalAbierto && (
                <Modal cerrarModal={() => setModalAbierto(false)}>
                  {/* Contenido para mostrar en la tarjeta una vez expandida */}
                  <p style={{ paddingTop: "2rem", color: "#fff" }}>
                    {ruta.descripcion}
                  </p>
                  <FiBookmark onClick={() => guardarRuta(rutas.find(ruta => ruta.id === rutaExpandida))} style={{ cursor: 'pointer', marginTop: '15px', transform: animacionActiva ? 'scale(1.2)' : 'scale(1)', color: 'white' }} />
                </Modal>
              )}
            </li>
          ))}
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
    </div>
  );
};

export default ListaRutas;
