import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const RoomCard = ({ name, percentage, omzet }) => {
  const chartData = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#F97316', '#F3F4F6'], // orange-500, gray-100
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const chartOptions = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className='flex items-center justify-between rounded-lg bg-white p-4 shadow-sm'>
      <div>
        <h2 className='text-lg font-semibold text-gray-800'>{name}</h2>
        <p className='mt-2 text-sm text-gray-500'>Percentage of Usage</p>
        <p className='text-lg font-bold'>{percentage}%</p>
        <p className='mt-2 text-sm text-gray-500'>Omzet</p>
        <p className='text-lg font-bold'>Rp {omzet.toLocaleString('id-ID')}</p>
      </div>
      <div className='h-20 w-20'>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RoomCard;
