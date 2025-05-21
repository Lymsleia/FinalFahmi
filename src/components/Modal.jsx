import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className='bg-opacity-50 fixed inset-0 z-50 flex items-center justify-end bg-black/10'>
      <div className='h-full w-full max-w-lg rounded-lg bg-white shadow-lg'>
        <div className='flex justify-end p-2'>
          <button
            onClick={onClose}
            className='rounded-full bg-gray-200 p-2 text-gray-500 hover:bg-gray-300'
          >
            <span className='sr-only'>Close</span>✕
          </button>
        </div>
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
