import React, { useEffect, useState } from 'react';
import { GiBootPrints } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";
import ModalEditarUsuario from './ModalEditarUsuario';
import EditarUsuario from './EditarUsuario';

const UserProfile = ({ user }, {
  rutasGuardadas,
  setRutasGuardadas }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  const profileStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '20px',
    backgroundColor: 'rgba(234, 234, 231, 0.8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
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

  const handleEditProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div style={profileStyle}>
      <div style={headerStyle}>
        <img src={user.avatar} alt="Avatar" style={avatarStyle} />
        <h2 style={nameStyle}>{user.nombre} {user.apellidos}</h2>
        {/* <p style={emailStyle}>{user.user.email}</p> */}
      </div>
      <div style={sectionStyle}>
        <h3 style={{ textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)', textUnderlineOffset: '7px' }}>Información Personal</h3>
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Correo electrónico:</strong> {user.mail}</p>
        {/* Otras secciones de información personal */}
      </div>
      <div style={sectionStyle}>
        <h3 style={{ textDecoration: 'underline 3px rgba(85, 107, 47, 0.7)', textUnderlineOffset: '7px' }}>Biografía</h3>
        <p>{user.biografia}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <GiBootPrints style={{ width: '127.7px', height: '33px' }} />
        <FiBookmark style={{ width: '127.7px', height: '33px' }} />
      </div>
      {/* Otras secciones del perfil */}
      <div style={{ textAlign: 'center' }}>
        <button style={editButtonStyle} onClick={handleEditProfileClick}>Editar Perfil</button>
        {/* Modal de edición */}
        {isModalOpen && (
          <ModalEditarUsuario isOpen={isModalOpen} onClose={handleCloseModal}>
            <EditarUsuario userId={user.IdUsuario} />
          </ModalEditarUsuario>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
