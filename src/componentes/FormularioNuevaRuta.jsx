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
      }
    } catch (error) {
      console.error('Error al añadir la ruta 2:', error);
      setMensajeError('¡Es obligatorio rellenar todos los campos!')
    }
  };

  return (
    <div className={styles.nuevaRutaComponent}>
      <div className={styles.formularioNuevaRutaCard}>
        <div className={styles.formulario}>
          <p className={styles.tituloFormulario}>Añadir nueva ruta</p>
          <div className={styles.filaFormulario}>
            <div className={styles.contenedorCampos}>
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
            <div className={styles.contenedorCampos}>
              <label>
                Descripción:
              </label>
              <textarea
                style={{

                }}
                id='descripcion'
                name="descripcion"
                value={ruta.descripcion}
                onChange={handleChange}
              />

            </div>
            <div className={styles.contenedorCampos}>
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
          </div >
          <div className={styles.filaFormulario}>
            <div className={styles.contenedorCampos}>
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
            <div className={styles.contenedorCampos}>
              <label>
                Dificultad:
              </label>
              <select
                id='dificultad'
                type="text"
                name="dificultad"
                value={ruta.dificultad}
                onChange={handleChange}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  border: 'none',
                }}
              >
                <option style={{
                  borderRadius: '10px',

                }} value=''>Elija la dificultad</option>
                <option style={{
                  borderRadius: '10px',

                }} value="baja">Baja</option>
                <option style={{
                  borderRadius: '10px',

                }} value="Media">Media</option>
                <option style={{
                  borderRadius: '10px',

                }} value="Alta">Alta</option>

              </select>
            </div>
            <div className={styles.contenedorCampos}>
              <label>
                Imagen de portada:
              </label>
              <input
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
        {mensajeError && (
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#ffffffad',
            width: '25vw', height: '8vh', borderRadius: '10px'
          }}>
            <p style={{ color: 'red', textAlign: 'center', padding: '3px', fontSize: '18px' }}>{mensajeError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioNuevaRuta;

