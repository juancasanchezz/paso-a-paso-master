import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Photo from '../img/dsc_6103.jpg';
import styles from '../index.module.css'

const ProfilePage = ({
  rutasGuardadas,
  setRutasGuardadas }) => {

  /*   const [usuario, setUsuario] = useState({}) */

  const user = {
    name: 'Juan Carlos Sánchez Rodríguez',
    email: 'juanca.cpc16@gmail.com',
    avatar: `${Photo}`,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nulla id ex fermentum bibendum non at nunc. Aenean sit amet metus dapibus, lacinia diam nec, egestas felis. Sed ullamcorper nisl sed ligula venenatis, nec malesuada nisi ullamcorper. Duis non tortor neque.',
    // Otras propiedades del usuario
  };
  /* setUsuario(user); */

  return (
    <div className={styles.profileCard}>
      <UserProfile user={user} rutasGuardadas={rutasGuardadas} setRutasGuardadas={setRutasGuardadas} />
    </div>
  );
};

export default ProfilePage;
