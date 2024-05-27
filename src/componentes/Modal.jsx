import React, { useEffect, useState } from "react";
import styles from '../index.module.css'

const Modal = ({ children, cerrarModal }) => {



  const handleOverlayClick = (e) => {
    // Verificar si el evento de clic ocurrió dentro del modal
    if (e.target === e.currentTarget) {
      // Si el clic ocurrió en el área del fondo oscuro, cerrar el modal
      cerrarModal();
    }
  };




  return (
    <div className={styles.modalOverlay}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal2} onClick={(e) => e.stopPropagation()} >
        <button className={styles.closeButton} onClick={cerrarModal}>
          &times;
        </button>
        {children}
      </div>
    </div >
  );
};

export default Modal;
