


import React from 'react';
import './modal.css'; 

const Modal = () => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="content">
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
