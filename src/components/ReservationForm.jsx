import React, { useState } from 'react';

const ReservationForm = ({ onSubmit }) => {
  // State untuk data form
  const [formData, setFormData] = useState({
    roomName: '',
    name: '',
    phone: '',
    company: '',
    date: '',
    startTime: '',
    endTime: '',
    participants: '',
    addSnack: false,
    snack: '',
    note: '',
  });

  // Handler untuk menangani perubahan input
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman

    // Transformasi data menjadi format yang sesuai dengan RoomSchedule
    const startHour = parseInt(formData.startTime.split(':')[0], 10);
    const endHour = parseInt(formData.endTime.split(':')[0], 10);

    const newReservation = {
      name: formData.company,
      room: formData.roomName,
      startHour,
      endHour,
      time: `${formData.startTime} - ${formData.endTime}`,
      status: 'Up Coming', // Status default
    };

    if (onSubmit) {
      onSubmit(newReservation); // Kirim data ke komponen induk (RoomSchedule)
    }
  };

  return (
    <div className='mx-auto max-w-md rounded-lg p-6'>
      <h2 className='mb-4 text-xl font-semibold'>Reservation Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Room Name */}
        <div className='mb-4'>
          <label htmlFor='roomName' className='block text-sm font-medium text-gray-700'>
            Room Name
          </label>
          <select
            id='roomName'
            name='roomName'
            value={formData.roomName}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          >
            <option value=''>Select Room Name</option>
            <option value='Aster Room'>Aster Room</option>
            <option value='Blubell Room'>Blubell Room</option>
            <option value='Camellia Room'>Camellia Room</option>
          </select>
        </div>

        {/* Name */}
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          />
        </div>

        {/* Company */}
        <div className='mb-4'>
          <label htmlFor='company' className='block text-sm font-medium text-gray-700'>
            Company/Organization
          </label>
          <input
            type='text'
            id='company'
            name='company'
            value={formData.company}
            onChange={handleChange}
            placeholder='Company/Organization'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          />
        </div>

        {/* Date */}
        <div className='mb-4'>
          <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
            Date
          </label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          />
        </div>

        {/* Start Time and End Time */}
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='startTime' className='block text-sm font-medium text-gray-700'>
              Start Time
            </label>
            <input
              type='time'
              id='startTime'
              name='startTime'
              value={formData.startTime}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
            />
          </div>
          <div>
            <label htmlFor='endTime' className='block text-sm font-medium text-gray-700'>
              End Time
            </label>
            <input
              type='time'
              id='endTime'
              name='endTime'
              value={formData.endTime}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
            />
          </div>
        </div>

        {/* Participants */}
        <div className='mb-4'>
          <label htmlFor='participants' className='block text-sm font-medium text-gray-700'>
            Number of Participants
          </label>
          <input
            type='number'
            id='participants'
            name='participants'
            value={formData.participants}
            onChange={handleChange}
            placeholder='Participants'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          />
        </div>

        {/* Add Snack */}
        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='addSnack'
            name='addSnack'
            checked={formData.addSnack}
            onChange={handleChange}
            className='h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500'
          />
          <label htmlFor='addSnack' className='ml-2 block text-sm text-gray-700'>
            Add Snack?
          </label>
        </div>

        {/* Snack */}
        {formData.addSnack && (
          <div className='mb-4'>
            <label htmlFor='snack' className='block text-sm font-medium text-gray-700'>
              Snack
            </label>
            <select
              id='snack'
              name='snack'
              value={formData.snack}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
            >
              <option value=''>Select Snack Name</option>
              <option value='Coffee Break Pacakge 1 - Rp 20.000/people'>
                Coffee Break Pacakge 1 - Rp 20.000/people
              </option>
              <option value='Coffee Break Pacakge 2 - Rp 50.000/people'>
                Coffee Break Pacakge 2 - Rp 50.000/people
              </option>
              <option value='Lunch Package 1 - Rp 20.000/people'>
                Lunch Package 1 - Rp 20.000/people
              </option>
              <option value='Lunch Package 2 - Rp 50.000/people'>
                Lunch Package 2 - Rp 50.000/people
              </option>
            </select>
          </div>
        )}

        {/* Note */}
        <div className='mb-4'>
          <label htmlFor='note' className='block text-sm font-medium text-gray-700'>
            Additional Notes
          </label>
          <textarea
            id='note'
            name='note'
            value={formData.note}
            onChange={handleChange}
            placeholder='Add your notes here'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm'
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type='submit'
            className='w-full rounded-md bg-orange-500 px-4 py-2 text-white shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
