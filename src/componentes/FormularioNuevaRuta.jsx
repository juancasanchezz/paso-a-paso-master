import React, { useState } from "react";
import styles from '../index.module.css'

const FormularioNuevaRuta = () => {
  const [ruta, setRuta] = useState({
    titulo: "",
    descripcion: "",
    ubicacion: "",
    distancia: "",
    dificultad: "",
    fotos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRuta((prevRuta) => ({
      ...prevRuta,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setRuta((prevRuta) => ({
      ...prevRuta,
      fotos: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar la información de la ruta al servidor
    console.log(ruta);
    // Después de enviar los datos, podrías limpiar el formulario
    setRuta({
      titulo: "",
      descripcion: "",
      ubicacion: "",
      distancia: "",
      dificultad: "",
      fotos: [],
    });
  };

  return (
    <div className={styles.nuevaRutaComponent}>
      <div className={styles.formularioNuevaRutaCard}>
        <form onSubmit={handleSubmit}
          action='insertarRuta.php'
          className={styles.form}
        >
          <div>
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
                  Fotos:
                </label>
                <input style={{ border: ' 1px solid black' }} type="file" multiple onChange={handleFileChange} />

              </div>
            </div>
          </div>
          <button type="submit" style={{
            padding: '10px',
            border: '1px solid black',
            borderRadius: '10px',
            fontSize: '15px',
            cursor: 'pointer',
            margin: '15px'
          }}>Añadir Ruta</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioNuevaRuta;

