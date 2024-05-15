import React, { useState } from "react";
import styles from '../index.module.css'
import { postRutas } from '../backend/users/users';
const FormularioNuevaRuta = () => {
  const [ruta, setRuta] = useState({
    titulo: "",
    descripcion: "",
    ubicacion: "",
    distancia: "",
    dificultad: "",
    portada: ""
  });
  const [mensajeError, setMensajeError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRuta((prevRuta) => ({
      ...prevRuta,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud POST al servidor
      const response = await postRutas(ruta);
      console.log(response)
      // Verificar si la solicitud fue exitosa
      if (response.statusText === 'OK') {
        console.log('Ruta añadida correctamente:', response.data.message);
        // Después de enviar los datos, limpiar el formulario
        setRuta({
          titulo: "",
          descripcion: "",
          ubicacion: "",
          distancia: "",
          dificultad: "",
          portada: ""
        });
      } else {
        console.error('Error al añadir la ruta:', response.message);
        setMensajeError('Es obligatorio completar todos los campos.');
      }
    } catch (error) {
      console.error('Error al añadir la ruta 2:', error);
    }
  };

  return (
    <div className={styles.nuevaRutaComponent}>
      <div className={styles.formularioNuevaRutaCard}>
        <div className={styles.formulario}>
          <p className={styles.tituloFormulario}>Añadir nueva ruta</p>
          <div className={styles.filaFormulario}>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <label>
                Nombre de la Ruta:
              </label>
              <input
                id='titulo'
                type="text"
                name="titulo"
                value={ruta.titulo}
                onChange={handleChange}
              />

            </div>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <label>
                Descripción:
              </label>
              <textarea
                id='descripcion'
                name="descripcion"
                value={ruta.descripcion}
                onChange={handleChange}
              />

            </div>
          </div >
          <div className={styles.filaFormulario}>
            <div style={{
              display: 'flex',
              gap: '10px',
            }}>
              <label>
                Ubicación:
              </label>
              <input
                id='ubicacion'
                type="text"
                name="ubicacion"
                value={ruta.ubicacion}
                onChange={handleChange}
              />
            </div>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <label>
                Kilómetros:
              </label>
              <input
                id='distancia'
                type="text"
                name="distancia"
                value={ruta.distancia}
                onChange={handleChange}
              />


            </div>

          </div>
          <div className={styles.filaFormulario}>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <label>
                Dificultad:
              </label>
              <input
                id='dificultad'
                type="text"
                name="dificultad"
                value={ruta.dificultad}
                onChange={handleChange}
              />

            </div>

            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <label>
                Imagen de portada:
              </label>
              <input
                style={{
                  width: '200px',
                }}
                id='portada'
                type="text"
                name="portada"
                value={ruta.portada}
                onChange={handleChange}
                placeholder='Debe ser la url de la imagen.'
              />
            </div>

          </div>
        </div>
        <button type="submit" style={{
          padding: '10px',
          border: '1px solid black',
          borderRadius: '10px',
          fontSize: '15px',
          cursor: 'pointer',
          margin: '15px',
          marginRight: '15px',
          width: '100%',
        }}
          onClick={handleSubmit}>Añadir Ruta</button>
      </div>
      {mensajeError && (
        <p style={{ color: 'red', textAlign: 'center', padding: '3px' }}>{mensajeError}</p>
      )}
    </div>
  );
};

export default FormularioNuevaRuta;

