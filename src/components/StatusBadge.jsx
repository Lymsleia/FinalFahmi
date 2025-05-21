import React from 'react';

const StatusBadge = ({ status }) => {
  const colorMap = {
    Done: 'bg-gray-200 text-gray-700 border border-gray-300',
    'In Progress': 'bg-orange-100 text-orange-800 border border-green-500',
    'Up Coming': 'bg-orange-100 text-orange-800 border border-green-500',
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${colorMap[status] || 'bg-gray-400 text-white'}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
