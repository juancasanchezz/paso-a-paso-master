import React from "react";

const Modal = ({ children, cerrarModal }) => {

  const handleOverlayClick = (e) => {
    // Verificar si el evento de clic ocurrió dentro del modal
    if (e.target === e.currentTarget) {
      // Si el clic ocurrió en el área del fondo oscuro, cerrar el modal
      cerrarModal();
    }
  };
  return (
    <div className="modalOverlay" style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px red solid',
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: 'blur(5px)',
      overflow: 'auto',
    }}
      onClick={handleOverlayClick}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{
        backgroundColor: '#fff',
        margin: '56px 0',
        width: '50%',
        height: 'auto',
        borderRadius: '5px',
        padding: '20px',
        position: 'relative',
        boxShadow: '0px 0px 300px 0px rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}>
        <button className="closeButton" onClick={cerrarModal} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '25px',
          color: '#333',
        }}>
          &times;
        </button>
        {children}
      </div>
    </div >
  );
};

export default Modal;
