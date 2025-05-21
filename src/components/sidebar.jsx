import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiGrid, FiCalendar } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: <FiHome size={24} />, tooltip: 'Home' },
    { path: '/dashboard', icon: <FiGrid size={24} />, tooltip: 'Dashboard' },
    {
      path: '/resevationschedule',
      icon: <FiCalendar size={24} />,
      tooltip: 'Reservation Schedule',
    },
  ];

  return (
    <aside className='flex h-screen w-16 flex-col items-center border-r bg-white py-4'>
      {/* Ikon Atas (panah) */}
      <div className='mb-4'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full border border-orange-500'>
          <span className='text-lg text-orange-500'>→</span>
        </div>
      </div>

      {/* Menu Ikon */}
      <nav className='flex flex-col items-center gap-4'>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link key={item.path} to={item.path} title={item.tooltip}>
              <div className={`rounded-md p-2 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
                {item.icon}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
