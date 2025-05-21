import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebar = location.pathname === '/login';

  return (
    <div className='flex h-screen flex-col'>
      <TopBar />

      <div className='flex h-full'>
        {!hideSidebar && <Sidebar />}

        <main className='flex-1 overflow-auto p-4'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
