import logo from '../images/meeting-room.jpg';

const Login = () => {
  return (
    <div
      className='flex min-h-screen items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className='w-full max-w-md rounded-2xl bg-white p-10 shadow-lg'>
        <div className='mb-6 flex items-center justify-center'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white'>
            E
          </div>
          <span className='ml-2 font-semibold text-orange-500'>E-Meeting</span>
        </div>

        <h2 className='mb-2 text-center text-2xl font-bold'>Welcome Back!</h2>
        <p className='mb-6 text-center text-sm text-black'>
          Please enter your "USERNAME" and "PASSWORD" here!
        </p>

        <form>
          <div className='mb-4'>
            <label className='mb-1 block text-sm'>Username</label>
            <input
              type='text'
              placeholder='Username'
              className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
            />
          </div>

          <div className='mb-2'>
            <label className='mb-1 block text-sm'>Password</label>
            <input
              type='password'
              placeholder='Password'
              className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
            />
          </div>

          <div className='mb-4 text-right'>
            <a href='#' className='text-xs text-orange-500 hover:underline'>
              Forgot Password?
            </a>
          </div>

          <button
            type='submit'
            className='w-full rounded-lg bg-orange-500 py-2 text-white transition hover:bg-orange-600'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
