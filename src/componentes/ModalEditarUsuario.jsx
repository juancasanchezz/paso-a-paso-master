import React from "react";
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
    <div style={{
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
      backdropFilter: 'blur(5px)',
    }}
      onClick={handleOverlayClick}>
      <div onClick={(e) => e.stopPropagation()} style={{
        backgroundColor: '#fff',
        width: '500px',
        height: '650px',
        borderRadius: '5px',
        padding: '20px',
        position: 'relative',
        backgroundColor: 'rgb(234, 234, 231)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}>
        <button className="closeButton" onClick={onClose} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          color: '#333',
          marginRight: '10px',
          marginTop: '10px'
        }}>X</button>{children}
      </div>
    </div>
  );
};

export default ModalEditarUsuario;
