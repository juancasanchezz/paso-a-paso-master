import React, { useState, useCallback } from 'react';
import { searchRutasByUbi, searchRutasByDif } from '../backend/users/users'; // Importa los dos servicios de backend
import debounce from 'lodash.debounce';

const BarraBusquedaRuta = ({ onSearch, setRutasFiltradas }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('location'); // 'location' or 'difficulty'

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    debouncedSearch(inputValue, filterType);
  };

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
    debouncedSearch(searchTerm, type);
  };

  const search = async (term, type) => {
    try {
      let results;
      if (type === 'location') {
        results = await searchRutasByUbi(term);
      } else if (type === 'difficulty') {
        results = await searchRutasByDif(term);
      }
      const data = results.data;
      console.log(data); // Envia el término de búsqueda y el tipo de filtro al backend para buscar rutas
      onSearch(data); // Llama a una función de devolución de llamada para manejar los resultados de la búsqueda
    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  };

  const debouncedSearch = useCallback(debounce((term, type) => {
    search(term, type);
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
            padding: "10px",
            background: filterType === 'location' ? "#007BFF" : "#dce1e4c2",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
          onClick={() => handleFilterTypeChange('location')}
        >
          Ubicación
        </button>
        <button
          style={{
            padding: "10px",
            background: filterType === 'difficulty' ? "#007BFF" : "#dce1e4c2",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
          onClick={() => handleFilterTypeChange('difficulty')}
        >
          Dificultad
        </button>
      </div>
      <input style={{
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
        placeholder={`Buscar por ${filterType === 'location' ? 'ubicación' : 'dificultad'}`} />
    </div>
  );
};

export default BarraBusquedaRuta;
