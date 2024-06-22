import '../App.css';
import logo from '../Assets/images/logo.png'
const Navbar = () => {
    const linkClass = ({ isActive }) =>
      isActive
        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  
    return (
      <nav className='bg-indigo-700 border-b border-indigo-500'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                <img className='h-10 w-auto' src={logo} alt='React Jobs' />
                <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                  React Jobs
                </span>
              <div className='md:ml-auto'>
                <div className='flex space-x-2'>
                <button type="button" className="btn btn-dark "  ><a> Home</a></button>
                <button type="button" className="btn btn-light "  > <a> Jobs</a>  </button>
                <button type="button" className="btn btn-light " > <a> Add Jobs</a>  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;