import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../index.module.css'
import { updateUser } from '../backend/users/users';

const EditarUsuario = ({ userId }) => {
  const [mensajeError, setMensajeError] = useState('');
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    biografia: ""
  });

  const obtenerUsuario = async () => {
    try {
      const response = await axios.get(`http://localhost/paso_a_paso/getUsuario.php?id=${userId}`);
      const data = response.data;

      setUsuario({
        nombre: data.nombre,
        apellidos: data.apellidos,
        biografia: data.biografia
      });
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };
  useEffect(() => {

    obtenerUsuario();
  }, [userId]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const handleEditProfile = async () => {
    try {
      const response = await updateUser(usuario);
      console.log(response);

      if (response.statusText === 'OK') {
        console.log('Usuario actualizado exitosamente: ', response.data.message)
        //Limpiamos los datos
        setUsuario({
          nombre: '',
          apellidos: '',
          bio: '',
        })
      } else {
        console.error('Error al añadir la ruta:', response.message);
        setMensajeError('Es obligatorio completar todos los campos.');
      }

    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      setMensajeError('Algo ha fallado')
    }
  }

  useEffect(() => {
    handleEditProfile()
  }, [])


  return (
    <div className={styles.editarUser}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <p style={{
          width: "20rem",
          textDecoration: "none",
          fontSize: "28px",
          marginBottom: "30px",
          color: "black",
          textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
          textUnderlineOffset: '7px',
        }}
        >Estás editando tus datos</p>
      </div>
      <div className={styles.campos}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={usuario.nombre}
          onChange={manejarCambio}
        />
      </div>
      <div className={styles.campos}>
        <label htmlFor="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={usuario.apellidos}
          onChange={manejarCambio}
        />
      </div>
      <div className={styles.campos}>
        <label htmlFor="biografia">Biografía:</label>
        <textarea
          id="biografia"
          name="biografia"
          value={usuario.biografia}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <button className={styles.guardar} onClick={handleEditProfile}>Guardar</button>
        {mensajeError && (
          <div style={{
            color: 'red',
            marginTop: '10px'
          }}>
            <p>{mensajeError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditarUsuario;
