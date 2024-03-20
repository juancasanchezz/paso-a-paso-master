import React, { useState } from "react";
import style from '../style/nuevaRuta.module.css'

const FormularioNuevaRuta = () => {
  const [ruta, setRuta] = useState({
    nombre: "",
    descripcion: "",
    ubicacion: "",
    kilometros: "",
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
      nombre: "",
      descripcion: "",
      ubicacion: "",
      kilometros: "",
      fotos: [],
    });
  };

  return (

    <form onSubmit={handleSubmit} className='form' style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '10px'
    }}>
      <div>
        <p style={{
          textAlign: 'center',
          fontSize: "27px",
          marginTop: "10px",
          color: "black"
        }} >Añadir nueva ruta</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <label>
              Nombre de la Ruta:
            </label>
            <input
              type="text"
              name="nombre"
              value={ruta.nombre}
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
              name="descripcion"
              value={ruta.descripcion}
              onChange={handleChange}
            />

          </div>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <label>
              Ubicación:
            </label>
            <input
              type="text"
              name="ubicacion"
              value={ruta.ubicacion}
              onChange={handleChange}
            />

          </div>
        </div >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <label>
              Kilómetros:
            </label>
            <input
              type="text"
              name="kilometros"
              value={ruta.kilometros}
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
            <input type="file" multiple onChange={handleFileChange} />

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
  );
};

export default FormularioNuevaRuta;

