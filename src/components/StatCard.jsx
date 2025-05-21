const StatCard = ({ title, value }) => {
  return (
    <div>
      <p className='text-sm text-gray-500'>{title}</p>
      <p className='text-xl font-semibold'>{value}</p>
    </div>
  );
};
