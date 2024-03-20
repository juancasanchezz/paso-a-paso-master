// Modal.js
import React from 'react';
import '../style/modal.module.css';

import { FiBookmark } from "react-icons/fi";


const Modal = ({ children, cerrarModal }) => {
  return (
    <div className="modalOverlay" onClick={cerrarModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
