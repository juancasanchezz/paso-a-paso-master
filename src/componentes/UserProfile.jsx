import React, { useEffect, useState } from 'react';
import { GiBootPrints } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";
import ModalEditarUsuario from './ModalEditarUsuario';
import EditarUsuario from './EditarUsuario';
import DeleteUserModal from './DeleteUserModal';
import "primeicons/primeicons.css";
import styles from '../index.module.css'
import MostrarRutasGuardadas from './MostrarRutasGuardadas';

const UserProfile = ({ user, idUser }) => {

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalMostrarOpen, setIsModalMostrarOpen] = useState(false);
  const [animacionMostrar, setAnimacionMostrar] = useState(false);


  const handleEditProfileClick = () => {
    setIsModalEditOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalEditOpen(false);
  };

  const handleDeleteUser = () => {
    setIsModalDeleteOpen(true);
  }

  const handleDeleteModal = () => {
    setIsModalDeleteOpen(false);
  }

  const handleMostrarRuta = () => {
    setAnimacionMostrar(true);
    setTimeout(() => {
      setAnimacionMostrar(false);
    }, 300);
    setIsModalMostrarOpen(true);
  }
  const handleOcultarRuta = () => {
    setIsModalMostrarOpen(false)
  }



  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className={styles.profileStyle}>
      <div className={styles.divIconos}>
        <i class="pi pi-user-edit" style={{ fontSize: '25px' }} onClick={handleEditProfileClick} title='editar usuario'></i>
        <i class="pi pi-user-minus" style={{ fontSize: '25px' }} onClick={handleDeleteUser} title='eliminar usuario'></i>
        {/* Modal de edición */}
        {isModalEditOpen && (
          <ModalEditarUsuario isOpen={isModalEditOpen} onClose={handleCloseModal}>
            <EditarUsuario idUser={idUser} onClose={handleCloseModal} />
          </ModalEditarUsuario>
        )}
        {isModalDeleteOpen && (
          <DeleteUserModal idUser={idUser} onClose={handleDeleteModal} />
        )}
      </div>
      <div className={styles.headerStyle}>
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
        <h2 className={styles.nameStyle}>{user.nombre} {user.apellidos}</h2>
        {/* <p style={emailStyle}>{user.user.email}</p> */}
      </div>
      <div className={styles.sectionStyle}>
        <h3 className={styles.infPersonal}>Información Personal</h3>
        <p className={styles.emailStyle}><strong>Nombre:</strong> {user.nombre}</p>
        <p className={styles.emailStyle}><strong>Correo electrónico:</strong> {user.mail}</p>
        {/* Otras secciones de información personal */}
      </div>
      <div className={styles.sectionStyle}>
        <h3 className={styles.infPersonal}>Biografía</h3>
        <p className={styles.emailStyle}>{user.biografia}</p>
      </div>
      <div className={styles.divBtnMostrarRuta}>

        <div className={styles.iconoGuardarU}>
          <GiBootPrints className={`${styles.btnMostrarRuta} ${animacionMostrar === true ? styles.btnMostrarRutaAnim : " "}`} onClick={handleMostrarRuta}
            title='Mostrar rutas' />
          {isModalMostrarOpen && (
            <MostrarRutasGuardadas isOpen={isModalMostrarOpen} onClose={handleOcultarRuta} />
          )}
        </div>
      </div>
      <p style={{
        textAlign: 'center'
      }}>Ver tus rutas</p>

    </div>
  );
};

export default UserProfile;
