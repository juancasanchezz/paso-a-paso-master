import React, { useState } from 'react';
import { deleteUser } from '../backend/users/users';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Loading from './Loading';

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
    <div className="modal" onClick={handleOverlayClick} style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      border: '0px red solid',
      backdropFilter: 'blur(15px)',
      zIndex: '2',
      transition: 'opacity 0.3s ease, transform 0.3s ease'
    }}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="modal-content" onClick={(e) => e.stopPropagation()}
          style={{
            padding: '16px'
          }}>
          <span className="close" onClick={onClose}
            style={{
              fontSize: '30px'
            }}>&times;</span>
          <h2>Confirmar eliminación de usuario</h2>
          <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
          <div style={{
            display: 'flex', justifyContent: 'space-around', padding: '16px'

          }}>
            <button onClick={handleDelete}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '6px',
                border: 'none',
                borderRadius: '10px'

              }}>Confirmar</button>
            <button onClick={onClose}
              style={{
                backgroundColor: '#ddd',
                color: 'black',
                padding: '6px',
                border: 'none',
                borderRadius: '10px'

              }}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteUserModal;
