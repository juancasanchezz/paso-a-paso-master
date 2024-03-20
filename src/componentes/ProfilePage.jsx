import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Photo from '../img/dsc_6103.jpg';

const ProfilePage = () => {

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
    <div style={{ marginBottom: '20px' }}>
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;
