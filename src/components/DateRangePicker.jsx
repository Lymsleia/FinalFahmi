import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className='flex items-end gap-6 p-6'>
      {/* Start Date */}
      <div className='flex flex-col'>
        <label className='mb-1 text-sm text-gray-700'>Start Date</label>
        <div className='relative'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText='Select date'
            className='w-64 rounded-md border border-gray-300 bg-white px-10 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none'
          />
          <img
            src='/icons/calendar.png'
            alt='Calendar'
            className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 opacity-60'
          />
        </div>
      </div>

      {/* End Date */}
      <div className='flex flex-col'>
        <label className='mb-1 text-sm text-gray-700'>End Date</label>
        <div className='relative'>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText='Select date'
            className='w-64 rounded-md border border-gray-300 bg-white px-10 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none'
          />
          <img
            src='/icons/calendar.png'
            alt='Calendar'
            className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 opacity-60'
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        className='mt-6 h-10 rounded-md bg-orange-500 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600'
        onClick={() => {
          console.log('Search clicked:', startDate, endDate);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default DateRangePicker;
