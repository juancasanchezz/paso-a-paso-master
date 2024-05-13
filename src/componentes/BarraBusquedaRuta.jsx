import React, { useState } from 'react';
// import { searchRoutesByLocation } from '../backend/routes'; // Importa la función para buscar rutas desde tu backend

const BarraBusquedaRuta = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
      //const results = await searchRoutesByLocation(location); // Envia la ubicación al backend para buscar rutas
      //onSearch(results); // Llama a una función de devolución de llamada para manejar los resultados de la búsqueda
    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px",
      width: "80vh"
    }}>
      <input style={{
        width: "80%",
        background: "#dce1e4c2",
        color: "black",
        outline: "none",
        border: "none"
      }} type="text" value={location} onChange={handleInputChange} placeholder="Buscar por ubicación" />
      <button style={{
        background: "#8a9094ae",
        color: "white",
        borderStyle: "outset",
        borderRadius: "10px",
        height: "30px",
        width: "70px",
        font: "bold 12px arial,sans-serif",
        textShadow: "none",
      }
      } onClick={handleSearch}>Buscar</button>
    </div >
  );
};

export default BarraBusquedaRuta;
