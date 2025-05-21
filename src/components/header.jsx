const Header = () => {
  return (
    <header className='flex items-center justify-between border-b bg-white px-6 py-4'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <div className='flex items-center gap-2'>
        <img src='https://via.placeholder.com/32' alt='profile' className='rounded-full' />
        <div>
          <p className='text-sm font-medium'>Angelina</p>
          <p className='text-xs text-gray-500'>Admin</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
