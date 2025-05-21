import React from 'react';
import DateRangePicker from '../components/DateRangePicker';
import RoomCard from '../components/RoomCard';

const Dashboard = () => {
  const summary = {
    omzet: 8000000,
    reservation: 100,
    visitor: 500,
    rooms: 12,
  };

  const rooms = [
    { name: 'Aster Room', percentage: 80, omzet: 2000000 },
    { name: 'Bluebell Room', percentage: 80, omzet: 2000000 },
    { name: 'Camellia Room', percentage: 80, omzet: 2000000 },
    { name: 'Camellia Room', percentage: 80, omzet: 2000000 },
    { name: 'Aster Room', percentage: 80, omzet: 2000000 },
    { name: 'Bluebell Room', percentage: 80, omzet: 2000000 },
    { name: 'Camellia Room', percentage: 80, omzet: 2000000 },
    { name: 'Camellia Room', percentage: 80, omzet: 2000000 },
    { name: 'Aster Room', percentage: 80, omzet: 2000000 },
    { name: 'Bluebell Room', percentage: 80, omzet: 2000000 },
    { name: 'Camellia Room', percentage: 80, omzet: 2000000 },
    { name: 'Camellia Room', percentage: 80, omzet: 2000000 },
  ];

  return (
    <div className='space-y-6 p-6'>
      {/* Layout grid utama */}
      <div className='space-y-6'>
        {/* Barisan Date Picker */}
        <div className='grid grid-cols-1 items-end gap-4 bg-white p-4 shadow-sm lg:grid-cols-12'>
          {/* Komponen Date Picker bisa menempati 10 kolom */}
          <div className='col-span-12 lg:col-span-10'>
            <DateRangePicker />
          </div>
        </div>

        {/* Summary Grid */}
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          <div className='rounded-xl bg-white p-4 shadow-sm'>
            <p className='text-sm text-gray-500'>Total Omzet</p>
            <p className='text-xl font-bold'>Rp {summary.omzet.toLocaleString('id-ID')}</p>
          </div>
          <div className='rounded-xl bg-white p-4 shadow-sm'>
            <p className='text-sm text-gray-500'>Total Reservation</p>
            <p className='text-xl font-bold'>{summary.reservation}</p>
          </div>
          <div className='rounded-xl bg-white p-4 shadow-sm'>
            <p className='text-sm text-gray-500'>Total Visitor</p>
            <p className='text-xl font-bold'>{summary.visitor}</p>
          </div>
          <div className='rounded-xl bg-white p-4 shadow-sm'>
            <p className='text-sm text-gray-500'>Total Rooms</p>
            <p className='text-xl font-bold'>{summary.rooms}</p>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              name={room.name}
              percentage={room.percentage}
              omzet={room.omzet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
