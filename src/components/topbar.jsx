import React from 'react';
import { useLocation } from 'react-router-dom';

const TopBar = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/dashboard':
        return 'Dashboard';
      case '/resevationschedule':
        return 'Reservation Schedule';
      default:
        return 'App';
    }
  };

  return (
    <header className='flex items-center justify-between border-b bg-white px-4 py-2 shadow-sm'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full border bg-gradient-to-r from-orange-500 to-yellow-200 text-sm font-bold text-white'>
          E
        </div>
        <h2 className='text-lg font-medium text-gray-800'>{getTitle()}</h2>
      </div>

      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <img
            src='https://i.pravatar.cc/40'
            alt='User Avatar'
            className='h-10 w-10 rounded-full border border-gray-300'
          />
          <div className='flex flex-col items-center justify-center gap-1'>
            <p className='text-xl font-bold'>Angelina</p>
            <span className='text-sm font-medium text-gray-400'>Angelina</span>
          </div>
        </div>
        <div className='flex items-center'>
          <button>
            <svg
              className='font-bold text-red-600'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
              <path d='M9 12h12l-3 -3' />
              <path d='M18 15l3 -3' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
