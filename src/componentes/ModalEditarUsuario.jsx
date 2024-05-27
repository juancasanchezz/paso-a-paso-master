import React from "react";
import styles from '../index.module.css';
import ReactDOM from "react-dom";
const ModalEditarUsuario = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    // Verificar si el evento de clic ocurrió dentro del modal
    if (e.target === e.currentTarget) {
      // Si el clic ocurrió en el área del fondo oscuro, cerrar el modal
      onClose();
    }
  };
  return (
    <div className={styles.modal1}
      onClick={handleOverlayClick}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal2E}>
        <button onClick={onClose} className={styles.btnEditarUser}>&times;</button>{children}
      </div>
    </div>
  );
};
export default ModalEditarUsuario;
