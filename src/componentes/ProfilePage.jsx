import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import Photo from '../img/dsc_6103.jpg';
import styles from '../index.module.css';
import { getDatosUser } from '../backend/users/users';


const ProfilePage = ({
  rutasGuardadas,
  setRutasGuardadas }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


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
