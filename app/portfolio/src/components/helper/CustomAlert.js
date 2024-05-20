import React, { useState } from 'react';

const CustomAlert = ({ message, variant = 'info', dismissible = true, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const variantClasses = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    isVisible && (
      <div className={`alert ${variantClasses[variant]}  fixed inset-0  bg-transparent bg-opacity-25  backdrop-blur-sm flex justify-center items-center`}>
        <div className={`alert ${variantClasses[variant]} w-fit h-fit flex rounded-sm p-2`}>
        <p className="font-medium">{message}</p>
        {dismissible && (
          <button type="button" onClick={handleClose} className="ml-3 text-white hover:text-opacity-75">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10L3.293 4.293z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        </div>
        
      </div>
    )
  );
};

export default CustomAlert;