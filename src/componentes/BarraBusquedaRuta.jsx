import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { searchRutasByUbi, searchRutasByDif } from '../backend/users/users';
import styles from '../index.module.css'

const BarraBusquedaRuta = ({ onSearch, onFilterChange, setRutasFiltradas }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtro, setFiltro] = useState('ubicacion');
  const [dificultad, setDificultad] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    handleSearchUbi(inputValue)
  };

  const handleFiltroChange = (value) => {
    setFiltro(value);
    onFilterChange(filtro)
    setSearchTerm('');
    setDificultad('') // Limpiar el término de búsqueda al cambiar el filtro
  };

  const handleSelectChange = (e) => {
    const inputValue = e.target.value
    console.log(inputValue)
    setDificultad(inputValue);
  }

  const handleSearchDif = async () => {
    console.log(dificultad)
    try {
      let results = await searchRutasByDif(dificultad);
      console.log(results)
      const data = results.data
      console.log(data)
      setRutasFiltradas(data)

    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  }
  const handleSearchUbi = async (dificultad) => {
    console.log(dificultad)
    try {
      let results = await searchRutasByUbi(dificultad);
      console.log(results)

      const data = results.data
      console.log(data)
      setRutasFiltradas(data)
    } catch (error) {
      console.error('Error al buscar rutas:', error);
    }
  }

  return (
    <div className={styles.contBarraBusqueda}>
      <div className={styles.divBotones}>
        <button
          className={`${styles.btnFiltros} ${filtro === 'ubicacion' ? styles.btnUbicacion : ""}`}
          onClick={() => handleFiltroChange('ubicacion')}
        >
          Ubicación
        </button>
        <button
          className={`${styles.btnFiltros} ${filtro === 'dificultad' ? styles.btnUbicacion : ""}`}
          onClick={() => handleFiltroChange('dificultad')}
        >
          Dificultad
        </button>
      </div>
      {filtro === 'ubicacion' ? (
        <input
          className={styles.inputUbi}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar por ubicación"
        />
      ) : (
        <>

          <select
            className={styles.inputDif}
            value={dificultad}
            onChange={handleSelectChange}
          >
            <option value="0">Seleccionar dificultad</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
          <button className={styles.btnGuardarDif}
            onClick={handleSearchDif}>Buscar</button>
        </>
      )}
    </div>
  );
};

export default BarraBusquedaRuta;
