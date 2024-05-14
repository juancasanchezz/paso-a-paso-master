import React, { useState } from 'react';
import { searchRutas } from '../backend/users/users';
// import { searchRoutesByLocation } from '../backend/routes'; // Importa la función para buscar rutas desde tu backend

const BarraBusquedaRuta = ({ onSearch }) => {
  const [location, setLocation] = useState('');



  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setLocation(inputValue);
    try {
      const results = await searchRutas(inputValue);
      const data = results.data
      //console.log(data) // Envia la ubicación al backend para buscar rutas
      onSearch(data); // Llama a una función de devolución de llamada para manejar los resultados de la búsqueda
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
        color: "#1c1d1d96",
        padding: "10px",
        outline: "none",
        border: "none"
      }} type="text" value={location} onChange={handleInputChange} placeholder="Buscar por ubicación" />

    </div >
  );
};

export default BarraBusquedaRuta;
