import React, { useState } from 'react'
import styles from '../index.module.css';
import { useEffect } from 'react';


const MostrarRutasGuardadas = ({ onClose }) => {

  const [rutasGuardadasU, setRutasGuardadasU] = useState([]);
  const [mensajeError, setMensajeError] = useState('')

  const handleOverlayClick = (e) => {
    // Verificar si el evento de clic ocurrió dentro del modal
    if (e.target === e.currentTarget) {
      // Si el clic ocurrió en el área del fondo oscuro, cerrar el modal
      onClose();
    }
  };

  const mostrarRutasGuardadas = () => {
    const rutasGuardadasLocal = localStorage.getItem('rutasGuardadas');
    console.log(rutasGuardadasLocal.length)
    if (rutasGuardadasLocal.length === 0) {
      setMensajeError('No hay rutas guardadas')
    } else {
      setRutasGuardadasU(JSON.parse(rutasGuardadasLocal));

    }
    //console.log("Rutas guardadas:", rutasGuardadasU);

  };

  useEffect(() => {
    mostrarRutasGuardadas();
  }, [])




  return (
    <div onClick={handleOverlayClick} style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column  ',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: '5px',
      border: '0px red solid',
      backdropFilter: 'blur(15px)',
      zIndex: '2',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      overflow: 'auto'
    }} >

      <div style={{
        position: 'relative',
        marginTop: '3rem'
      }}>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
        }}>

          <p style={{
            width: "30rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "30px",
            marginTop: "10px",
            color: "black",
            textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
            textUnderlineOffset: '7px',
            textAlign: 'center',
            zIndex: '4'
          }}>TUS RUTAS GUARDADAS</p>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}>

          <ul className={`${styles.listaRutas}`}>

            {rutasGuardadasU.map((ruta) => (
              <li key={ruta.IdRuta}
                className={`${styles.listaRutasItem}`}>
                <div
                  className={styles.rutaTarjeta}
                >
                  <div style={{
                    width: '50%',
                    height: 'auto'
                  }}>
                    {mensajeError && (
                      <>
                        <p style={{
                          zIndex: '8'
                        }}>{mensajeError}</p>
                      </>
                    )}
                    <p style={{
                      fontSize: "18px", textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
                      textUnderlineOffset: '7px', color: "#5d5959"
                    }}>
                      <b>{ruta.titulo}</b>
                    </p>
                    <p style={{ fontSize: "13px", marginTop: '15px', color: "#837c7c" }}><b>Ubicación:</b> {ruta.ubicacion}</p>
                    <p style={{ fontSize: "13px", marginTop: '15px', color: "#837c7c" }}><b>Dificutad:</b> {ruta.dificultad}</p>
                    <p style={{ fontSize: "17px", marginTop: '15px', color: "#837c7c" }}><b>{ruta.distancia}km</b></p>
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )



}

export default MostrarRutasGuardadas;