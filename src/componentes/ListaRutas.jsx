import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import styles from '../index.module.css';
import rutas from '../backend/routes/rutas.json'
import { GiBootPrints } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";


const ListaRutas = () => {
  const [rutas, setRutas] = useState([]);
  const [rutaExpandida, setRutaExpandida] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rutasVisibles, setRutasVisibles] = useState(2);
  const [haExpandido, setHaExpandido] = useState(false);
  const [rutasGuardadas, setRutasGuardadas] = useState([]);
  const [animacionGuardar, setAnimacionGuardar] = useState(false);
  const [animacionMostrar, setAnimacionMostrar] = useState(false);


  const getRutas = async () => {
    try {
      const response = await fetch('../backend/routes/rutas.json');
      console.log(response)
      if (!response.ok) {
        throw new Error('Error al obtener los datos: ' + response.statusText);
      }
      const data = await response.json();
      console.log(data)
      setRutas(data);
    } catch (error) {
      console.error('Error al traer los datos:', error);
    }
  };

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

  const cargarMasRutas = () => {
    setRutasVisibles((prev) => prev + 2);
  };

  const cargarMenosRutas = () => {
    setRutasVisibles((prev) => prev - 2);
  };

  const guardarRuta = (ruta) => {
    const rutaIndex = rutasGuardadas.findIndex((r) => r.id === ruta.id);

    if (rutaIndex !== -1) {
      setRutasGuardadas((prevRutas) =>
        prevRutas.filter((r) => r.id !== ruta.id)
      );
      setAnimacionGuardar(true);
    } else {
      setRutasGuardadas((prevRutas) => [...prevRutas, ruta]);
      setAnimacionGuardar(true);
    }

    setTimeout(() => {
      setAnimacionGuardar(false);
    }, 300);
  };

  const mostrarRutasGuardadas = () => {
    setAnimacionMostrar(true);
    setTimeout(() => {
      setAnimacionMostrar(false);
    }, 300);
    console.log("Rutas guardadas:", rutasGuardadas);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setRutaExpandida(null);
  };

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
            }}
          >
            Lista de Rutas
          </p>
        </div>
        <ul className={`${styles.listaRutas} ${styles.listaRutasExpandida}`}>
          {rutas.slice(0, rutasVisibles).map((ruta) => (
            <li
              key={ruta.id}
              className={`${styles.listaRutasItem} ${rutaExpandida === ruta.id ? styles.expandida : ""
                }`}
            >
              <div
                className={styles.rutaTarjeta}
                onClick={() => manejarExpansion(ruta.id)}
              >
                <p style={{ fontSize: "18px" }}>
                  <b>{ruta.id}</b>
                </p>
                <p style={{ fontSize: "18px" }}>Dificultad: {ruta.dificultad}</p>
                <p style={{ fontSize: "18px" }}>Localización: {ruta.localizacion}</p>
              </div>

              {rutaExpandida === ruta.id && modalAbierto && (
                <>
                  <Modal
                    cerrarModal={cerrarModal}
                    style={{
                      transition: 'all 3s ease-out'
                    }}
                  >
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
                        onClick={() => guardarRuta(ruta)}
                        style={{
                          width: '127.7px',
                          height: '26px',
                          cursor: 'pointer',
                          transform: animacionGuardar ? 'scale(1.2)' : 'scale(1)', color:
                            '#837c7c'
                        }} />
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
    </div >
  );
};

export default ListaRutas;