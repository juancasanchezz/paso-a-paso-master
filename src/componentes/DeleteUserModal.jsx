import React, { useState } from 'react';
import { deleteUser } from '../backend/users/users';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Loading from './Loading';
import styles from '../index.module.css'

const DeleteUserModal = ({ idUser, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory();
  console.log(idUser)

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      const response = await deleteUser(idUser);
      console.log(response)
      const data = response;
      if (data.status === 200) {
        // Eliminación exitosa, puedes redirigir o mostrar un mensaje
        onClose();
        history.push('/login')
      } else {
        // Error al eliminar, mostrar mensaje de error
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    } finally {

      setIsLoading(false)
    }
  };
  const handleOverlayClick = (e) => {
    // Verificar si el evento de clic ocurrió dentro del modal
    if (e.target === e.currentTarget) {
      // Si el clic ocurrió en el área del fondo oscuro, cerrar el modal
      onClose();
    }
  };

  return (
    <div className={styles.modalDelete} onClick={handleOverlayClick} >
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}
        >
          <span className={styles.close} onClick={onClose}
          >&times;</span>
          <h2>Confirmar eliminación de usuario</h2>
          <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
          <div className={styles.divBotonesDeleteUser}>
            <button onClick={handleDelete}
              className={styles.btnConfirm}>Confirmar</button>
            <button onClick={onClose}
              className={styles.btnCancel}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteUserModal;
