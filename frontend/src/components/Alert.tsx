'use client';

import { useState, useEffect } from 'react';

type AlertType = 'success' | 'error' | 'info';

interface AlertProps {
  message: string;
  type: AlertType;
  duration?: number;
  onClose: () => void;
}

export default function Alert({ message, type, duration = 1500, onClose }: AlertProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerIn = setTimeout(() => setIsVisible(true), 50); 
    
    const timerOut = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); 
    }, duration);


    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  }, [duration, onClose]);


  const styles = {
    success: 'bg-green-500 border-green-700 text-white',
    error: 'bg-red-500 border-red-700 text-white',
    info: 'bg-blue-500 border-blue-700 text-white',
  };

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 rounded-lg shadow-xl border-l-4 transition-all duration-300 ease-in-out z-50 max-w-md w-full ${styles[type]} ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center">
        <span className="font-semibold grow">{message}</span>
        <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }} className="ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition">
          X
        </button>
      </div>
    </div>
  );
};
