import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReservationForm from '@components/ReservationForm';
import Modal from '@components/Modal';

const RoomSchedule = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [reservations, setReservations] = useState([
    {
      name: 'PT Maju Jaya',
      room: 'Aster Room',
      startHour: 8,
      endHour: 9,
      time: '08:00 - 09:00',
      status: 'Done',
    },
    {
      name: 'PT XYZ Corp',
      room: 'Blubell Room',
      startHour: 10,
      endHour: 11,
      time: '10:00 - 11:00',
      status: 'In Progress',
    },
    {
      name: 'Organisasi Muslim Pusat',
      room: 'Aster Room',
      startHour: 14,
      endHour: 15,
      time: '14:00 - 15:00',
      status: 'Up Coming',
    },
    {
      name: 'Alisa Company',
      room: 'Camellia Room',
      startHour: 14,
      endHour: 15,
      time: '14:00 - 15:00',
      status: 'Up Coming',
    },
  ]);

  const rooms = ['Aster Room', 'Blubell Room', 'Camellia Room'];
  const hours = Array.from({ length: 9 }, (_, i) => 8 + i); // 08.00 - 16.00

  const handleAddNewReservation = () => {
    setIsFormVisible(true); // Show form modal
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Hide form modal
  };

  const handleSubmitReservation = (newReservation) => {
    setReservations((prevReservations) => [...prevReservations, newReservation]);
    handleCloseForm();
  };

  return (
    <div className='p-6'>
      {/* TOP BAR */}
      <div className='mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='text-sm font-medium whitespace-nowrap text-gray-700'>
            {new Date().toLocaleDateString('id-ID', {
              weekday: 'long',
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </div>

          <div className='flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-end'>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText='Start Date'
              className='w-[200px] rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none'
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText='End Date'
              className='w-[200px] rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none'
            />
            <button className='rounded border border-orange-500 bg-white px-4 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50'>
              Search
            </button>
            <button
              className='rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600'
              onClick={handleAddNewReservation}
            >
              + Add New Reservation
            </button>
          </div>
        </div>
      </div>

      {/* SCHEDULE */}
      <div className='rounded-lg bg-white shadow'>
        <div className='overflow-x-auto'>
          <div className='ml-16 grid grid-cols-3 border-t border-b border-gray-300 bg-gray-50 text-center text-sm font-semibold'>
            {rooms.map((room, idx) => (
              <div
                key={room}
                className={`border-l border-gray-300 py-2 ${idx === rooms.length - 1 ? 'border-r' : ''}`}
              >
                {room}
              </div>
            ))}
          </div>

          <div>
            {hours.map((hour) => (
              <div key={hour} className='flex min-h-[4rem] border-b border-dashed border-gray-300'>
                <div className='w-16 pt-2 pr-2 text-right text-sm text-gray-500'>
                  {hour.toString().padStart(2, '0')}:00
                </div>
                <div className='grid flex-1 grid-cols-3'>
                  {rooms.map((room, idx) => {
                    const reservation = reservations.find(
                      (res) => res.room === room && res.startHour === hour
                    );
                    return (
                      <div
                        key={`${room}-${hour}`}
                        className={`relative border-l border-gray-200 px-2 ${idx === rooms.length - 1 ? 'border-r' : ''}`}
                      >
                        {reservation && (
                          <div
                            className={`absolute w-full rounded-lg bg-gray-100 p-2 text-xs text-gray-700 shadow-md ${
                              reservation.status === 'In Progress' ||
                              reservation.status === 'Up Coming'
                                ? 'border-l-4 border-orange-600 bg-orange-200'
                                : 'border-l-4 border-gray-400'
                            }`}
                          >
                            <p className='text-sm font-semibold'>{reservation.name}</p>
                            <p className='text-xs text-gray-600'>{reservation.time}</p>
                            <div className='flex items-center justify-end'>
                              <p
                                className={`rounded-2xl border border-gray-400 p-2 ${
                                  reservation.status === 'Up Coming'
                                    ? 'border border-orange-400 text-orange-400'
                                    : ''
                                }${
                                  reservation.status === 'In Progress'
                                    ? 'border border-green-400 text-green-400'
                                    : ''
                                }`}
                              >
                                {reservation.status}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isFormVisible && (
        <Modal onClose={handleCloseForm}>
          <ReservationForm onSubmit={handleSubmitReservation} />
        </Modal>
      )}
    </div>
  );
};

export default RoomSchedule;
