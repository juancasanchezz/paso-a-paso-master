import React, { useEffect, useState } from 'react';
import { GiBootPrints } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";

const UserProfile = (user) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };


  const profileStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  };

  const nameStyle = {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)',
    textUnderlineOffset: '7px'
  };

  const emailStyle = {
    margin: '5px 0',
    color: '#666',
  };

  const sectionStyle = {
    marginBottom: '20px',
    padding: '10px',
    textAlign: 'center'
  };

  const editButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };

  const handleEditProfile = async (event) => {
    // Lógica para editar el perfil
    event.preventDefault();

    // Envía los datos editados al servidor
    try {
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, avatar, bio }),
      });

      if (response.ok) {
        // Actualiza los datos del usuario en el estado global o local
        setName(name);
        setEmail(email)
        setAvatar(avatar)
        setBio(bio)
        // Mostrar un mensaje de éxito o redirigir a otra página
        console.log("Los datosa han sido actualizados correctamente")
      } else {
        // Maneja errores de respuesta del servidor
        console.error("Los datos ya existen.")
      }
    } catch (error) {
      console.error("Error al actualizar los datos.")

    }
  };

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div style={profileStyle}>
      <div style={headerStyle}>
        <img src={user.user.avatar} alt="Avatar" style={avatarStyle} />
        <h2 style={nameStyle}>{user.user.name}</h2>
        {/* <p style={emailStyle}>{user.user.email}</p> */}
      </div>
      <div style={sectionStyle}>
        <h3 style={{ textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)', textUnderlineOffset: '7px' }}>Información Personal</h3>
        <p><strong>Nombre:</strong> {user.user.name}</p>
        <p><strong>Correo electrónico:</strong> {user.user.email}</p>
        {/* Otras secciones de información personal */}
      </div>
      <div style={sectionStyle}>
        <h3 style={{ textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)', textUnderlineOffset: '7px' }}>Biografía</h3>
        <p>{user.user.bio}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <GiBootPrints style={{ width: '127.7px', height: '33px' }} />
        <FiBookmark style={{ width: '127.7px', height: '33px' }} />
      </div>
      {/* Otras secciones del perfil */}
      <div style={{ textAlign: 'center' }}>
        <button style={editButtonStyle} onClick={handleEditProfile}>Editar Perfil</button>
      </div>
    </div>
  );
};

export default UserProfile;
