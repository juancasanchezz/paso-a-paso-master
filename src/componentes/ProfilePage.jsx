import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import Photo from '../img/dsc_6103.jpg';
import styles from '../index.module.css';
import { getDatosUser } from '../backend/users/users';


const ProfilePage = ({ rutasGuardadas, setRutasGuardadas }) => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(Window.sessionStorage)
  const idUser = sessionStorage.getItem('idUsuario');


  // Suponiendo que tienes el ID del usuario almacenado en una variable llamada userID
  /*   const userID = obtenerUserID();
  
    // Guardar el userID en el localStorage
    localStorage.setItem('IdUsuario', userID); */

  console.log('idUser: ', idUser)

  // Obtener los datos del usuario



  const getDatosUsuario = async () => {
    try {
      const datosUsuario = await getDatosUser(idUser);
      setUser(datosUsuario.data);
      console.log('datosUsuario: ', user);
    } catch (error) {
      console.error('Error al obtener los datos del usuario: ', error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getDatosUsuario()
  }, [])
  console.log('datos: ', user);

  return (
    <div className={styles.profileCard}>

      <UserProfile user={user} rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} />

    </div>
  )
};

export default ProfilePage;
