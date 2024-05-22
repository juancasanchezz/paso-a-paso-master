import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import styles from '../index.module.css';
import { GiBootPrints } from "react-icons/gi";
import axios from 'axios';
import { searchRutasByUbi, searchRutasByDif } from '../backend/users/users';
import BarraBusquedaRuta from './BarraBusquedaRuta';

const ListaRutas = ({ setRutasGuardadas, rutasGuardadas }) => {
  const [rutas, setRutas] = useState([]);
  const [rutaExpandida, setRutaExpandida] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rutasVisibles, setRutasVisibles] = useState(2);
  const [haExpandido, setHaExpandido] = useState(false);
  const [animacionGuardar, setAnimacionGuardar] = useState(false);
  const [animacionMostrar, setAnimacionMostrar] = useState(false);
  const [rutasFiltradas, setRutasFiltradas] = useState([]);
  const [filterType, setFilterType] = useState('location');

  const getRutasF = async () => {
    try {
      const response = await searchRutasByUbi("");
      const data = response.data;
      setRutasFiltradas(data);
    } catch (error) {
      console.error('Error al traer los datos:', error);
    }
  };

  useEffect(() => {
    setHaExpandido(true);
    getRutasF();
    cargarRutasGuardadas();
  }, []);

  useEffect(() => {
    if (rutasVisibles <= 2) {
      setHaExpandido(false);
    } else {
      setHaExpandido(true);
    }
  }, [rutasVisibles]);

  const handleSearch = async () => {
    try {

    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

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
    setRutasGuardadas((prevRutas) => {
      const rutaIndex = prevRutas.findIndex((r) => r.IdRuta === ruta.IdRuta);
      if (rutaIndex !== -1) {
        const nuevasRutasGuardadas = prevRutas.filter((r) => r.IdRuta !== ruta.IdRuta);
        localStorage.setItem('rutasGuardadas', JSON.stringify(nuevasRutasGuardadas));
        return nuevasRutasGuardadas;
      } else {
        const nuevasRutasGuardadas = [...prevRutas, ruta];
        localStorage.setItem('rutasGuardadas', JSON.stringify(nuevasRutasGuardadas));
        return nuevasRutasGuardadas;
      }
    });
    setAnimacionGuardar(true);
    setTimeout(() => {
      setAnimacionGuardar(false);
    }, 300);
  };

  const cargarRutasGuardadas = () => {
    const rutasGuardadasLocal = localStorage.getItem('rutasGuardadas');
    if (rutasGuardadasLocal) {
      setRutasGuardadas(JSON.parse(rutasGuardadasLocal));
    }
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
      <div className={`${styles.rutas} ${rutaExpandida !== null ? styles.listaRutasExpandida : ""}`}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}>
          <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "10px",
          }}>
            <p style={{
              width: "20rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: "30px",
              marginTop: "10px",
              color: "black",
              textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
              textUnderlineOffset: '7px',
            }}>
              Lista de Rutas
            </p>
          </div>
          <div>
            <BarraBusquedaRuta onSearch={handleSearch} setRutasFiltradas={setRutasFiltradas} onFilterChange={handleFilterChange} />
          </div>
        </div>
        <ul className={`${styles.listaRutas} ${styles.listaRutasExpandida}`}>
          {rutasFiltradas.slice(0, rutasVisibles).map((ruta) => (
            <li
              key={ruta.IdRuta}
              className={`${styles.listaRutasItem} ${rutaExpandida === ruta.id ? styles.expandida : ""}`}
            >
              <div
                className={styles.rutaTarjeta}
                onClick={() => manejarExpansion(ruta.IdRuta)}
              >
                <div style={{
                  width: '50%',
                  height: 'auto'
                }}>
                  <p style={{
                    fontSize: "18px", textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
                    textUnderlineOffset: '7px', color: "#5d5959"
                  }}>
                    <b>{ruta.titulo}</b>
                  </p>
                  <p style={{ fontSize: "13px", marginTop: '15px', color: "#837c7c" }}><b>Ubicación:</b> {ruta.ubicacion}</p>
                  <p style={{ fontSize: "13px", marginTop: '15px', color: "#837c7c" }}><b>Dificutad:</b> {ruta.dificultad}</p>
                  <p style={{ fontSize: "17px", marginTop: '15px', color: "#837c7c" }}><b>{ruta.distancia}km</b> </p>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                  width: '50%',
                  maxHeight: '100%',
                  overflow: 'hidden',
                  borderRadius: '10px'
                }}>
                  <img src={ruta.portada} alt={ruta.titulo} style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'cover',
                  }} />
                </div>
                {/* <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                  width: '50%',
                  maxHeight: '100%',
                  overflow: 'hidden',
                  borderRadius: '10px'
                }}>
                  <img src={ruta.portada} alt={ruta.titulo} style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'cover',
                  }} />
                </div> */}
              </div>

              {rutaExpandida === (ruta.IdRuta || ruta.id) && modalAbierto && (
                <>
                  <Modal
                    cerrarModal={cerrarModal}
                    style={{
                      transition: 'all 3s ease-out',
                      height: 'auto'
                    }}
                  >
                    <p style={{
                      fontSize: "18px", textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
                      textUnderlineOffset: '7px', color: "#5d5959"
                    }}>
                      <b>{ruta.titulo}</b>
                    </p>
                    <p
                      style={{
                        paddingTop: "1rem",
                        color: "#837c7c",
                      }}
                    >
                      {ruta.descripcion}
                    </p>
                    <p
                      style={{
                        paddingTop: "2rem",
                        color: "#837c7c"
                      }}
                    >
                      <b>Dificultad:</b> {ruta.dificultad}
                    </p>
                    <p
                      style={{
                        paddingTop: "2rem",
                        color: "#837c7c"
                      }}
                    >
                      <b>Distancia:</b> {ruta.distancia}km
                    </p>
                    <div style={{
                      width: '100%',
                      height: '50%',
                      marginTop: '16px'
                    }}>
                      <img src={ruta.portada} alt={ruta.titulo} style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        justifyContent: 'center'
                      }} />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '5px',
                        transition: 'all 3s ease-out',
                        marginTop: '20px'
                      }}>
                      <GiBootPrints
                        onClick={() => guardarRuta(ruta)}
                        style={{
                          width: '127.7px',
                          height: '26px',
                          cursor: 'pointer',
                          transform: animacionGuardar ? 'scale(1.2)' : 'scale(1)', color:
                            '#837c7c'
                        }} />
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
        {rutasVisibles < rutasFiltradas.length && (
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
