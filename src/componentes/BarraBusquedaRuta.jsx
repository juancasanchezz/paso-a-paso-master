import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { searchRutasByUbi, searchRutasByDif } from '../backend/users/users';

const BarraBusquedaRuta = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtro, setFiltro] = useState('ubicacion');
  const [dificultad, setDificultad] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue, filtro);
  };

  const handleFiltroChange = (value) => {
    setFiltro(value);
    setSearchTerm(''); // Limpiar el término de búsqueda al cambiar el filtro
    setDificultad(''); // Limpiar la dificultad seleccionada
  };

  const handleSelectChange = (e) => {
    const inputValue = e.target.value
    setDificultad(inputValue);
    console.log(dificultad)

  }
  const handleSearch = async (filtro) => {
    try {
      let results;
      if (filtro === 'ubicacion') {
        results = await searchRutasByUbi(searchTerm);
        console.log(results)
      } else if (filtro === 'dificultad') {
        results = await searchRutasByDif(dificultad);
        console.log(results)
      }
      const data = results.data;
      onSearch(data);
    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  };

  const debouncedSearch = useCallback(debounce((term, type) => {
    onSearch(term, type);
  }, 300), []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      width: "80vh"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        marginBottom: "10px"
      }}>
        <button
          style={{
            padding: "10px 15px",
            background: filtro === 'ubicacion' ? "#007BFF" : "#515557c2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: '10px'
          }}
          onClick={() => handleFiltroChange('ubicacion')}
        >
          Ubicación
        </button>
        <button
          style={{
            padding: "10px 15px",
            background: filtro === 'dificultad' ? "#007BFF" : "#515557c2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: '10px'
          }}
          onClick={() => handleFiltroChange('dificultad')}
        >
          Dificultad
        </button>
      </div>
      {filtro === 'ubicacion' ? (
        <input
          style={{
            width: "80%",
            background: "#dce1e4c2",
            color: "#1c1d1d96",
            padding: "10px",
            outline: "none",
            border: "none"
          }}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar por ubicación"
        />
      ) : (
        <>

          <select
            style={{
              width: "80%",
              background: "#dce1e4c2",
              color: "#1c1d1d96",
              padding: "10px",
              outline: "none",
              border: "none",
              borderRadius: '10px'
            }}
            value={searchTerm}
            onChange={handleSelectChange}
          >
            <option value="">Seleccionar dificultad</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
          <button style={{
            padding: "8px 10px",
            background: "#91948c", // Color verde oliva
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: '10px',
            marginTop: '10px',
            fontSize: "12px",
            fontFamily: "Poppins",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Sombra para darle profundidad
            transition: "background 0.3s ease", // Transición suave para el cambio de color de fondo
          }}
            onMouseOver={(e) => e.target.style.background = "#6B8E23"} // Color verde más claro al pasar el mouse
            onMouseOut={(e) => e.target.style.background = "#556B2F"} // Vuelve al color original al quitar el mouse
            onClick={handleSearch}>Buscar</button>
        </>
      )}
    </div>
  );
};

export default BarraBusquedaRuta;
