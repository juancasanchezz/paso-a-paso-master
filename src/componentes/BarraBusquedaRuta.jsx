import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const BarraBusquedaRuta = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('dificultad'); // 'location' or 'difficulty'

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    debouncedSearch(inputValue, filterType);
  };

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
    onFilterChange(type);  // Notificar al padre sobre el cambio de filtro
    debouncedSearch(searchTerm, type);
  };

  const search = async (term, type) => {
    // La lógica de búsqueda se delegará al componente padre
    onSearch(term, type);
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
            padding: "10px 15px",
            background: filterType === 'location' ? "#007BFF" : "#515557c2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: '10px'
          }}
          onClick={() => handleFilterTypeChange('location')}
        >
          Ubicación
        </button>
        <button
          style={{
            padding: "10px 15px",
            background: filterType === 'dificultad' ? "#007BFF" : "#515557c2",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: '10px'
          }}
          onClick={() => handleFilterTypeChange('dificultad')}
        >
          Dificultad
        </button>
      </div>
      <input style={{
        width: "80%",
        background: "#dce1e4c2",
        color: "#1c1d1de5",
        padding: "10px",
        outline: "none",
        border: "none",
      }}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={`Filtrar por ${filterType === 'location' ? 'ubicación' : 'dificultad'}`} />
    </div>
  );
};

export default BarraBusquedaRuta;
