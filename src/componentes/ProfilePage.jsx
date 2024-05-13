import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import Photo from '../img/dsc_6103.jpg';
import styles from '../index.module.css';
import { getDatosUser } from '../backend/users/users';


const ProfilePage = ({
  rutasGuardadas,
  setRutasGuardadas }) => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Suponiendo que tienes el ID del usuario almacenado en una variable llamada userID
  const userID = obtenerUserID();

  // Guardar el userID en el localStorage
  localStorage.setItem('IdUsuario', userID);


  function obtenerIDUsuario () {
    // Obtener el ID del usuario almacenado en localStorage
    const userID = localStorage.getItem('IdUsuario');

    console.log(userID);
    // Verificar si se encontró un ID de usuario en localStorage
    if (userID) {
      // Si se encontró un ID de usuario, devolverlo
      return userID;
    } else {
      // Si no se encontró un ID de usuario, devolver null o algún valor predeterminado según tu lógica
      return null;
    }
  }



  const getDatosUsuario = async () => {
    try {
      const datosUsuario = await getDatosUser();
      console.log('datos: ', datosUsuario)
      setUser(datosUsuario);

    } catch (error) {
      console.error('Error al obtener los datos del usuario: ', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    obtenerIDUsuario();
    getDatosUsuario();
  }, [])

  return (
    <div className={styles.profileCard}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <UserProfile user={user} rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} />
      )}
    </div>
  );
};

export default ProfilePage;
