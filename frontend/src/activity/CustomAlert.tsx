import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface CustomAlertProps {
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
          <button className="absolute top-2 right-2 text-indigo-700 hover:text-indigo-900 focus:outline-none" onClick={handleClose}>
            <FaTimes className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-center mb-4">
            <img className="h-40" src="src/activity/test.gif" alt="Sad Emoji" />
          </div>
          <p className="text-xl font-bold mb-2">Ops, algo deu errado!</p>
          <p className="text-lg">Você ainda não completou a atividade corretamente.</p>
          <p className="text-lg">Tente novamente e não desista!</p>
        </div>
      )}
    </>
  );
};

export default CustomAlert;
