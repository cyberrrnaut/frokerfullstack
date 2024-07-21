
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white  z-50'>
      <div className='flex justify-around items-center h-16 px-4'>
        <img
          src='https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg'
          alt='Logo'
          className='w-[115px] h-[57px]'
        />
        <div className='flex gap-9'>
          <Link to="/">
            <div className='text-orange-600 text-xl hover:underline'>
              Home
            </div>
          </Link>
          <Link to="/">
            <div className='text-orange-600 text-xl hover:underline'>
              Blogs
            </div>
          </Link>
          <Link to="/">
            <div className='text-orange-600 text-xl hover:underline'>
              Discover Froker
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
