import { OrangeBtn } from '../components/OrangeBtn';

export function Pageone() {
  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center p-4'>
      
      {/* Text Section */}
      <div className='text-center md:text-left relative z-10 md:pl-[91px]'> {/* Added padding-left */}
        <h3 className='text-7xl font-bold mb-2'>
          Elevate your
        </h3>

        <div className='flex relative z-10 justify-center md:justify-start mb-4'>
          <h1 className='text-4xl font-bold mx-2 text-orange-500'>Influence {'>>'}</h1>
          <h1 className='text-4xl font-bold mx-2 text-orange-500'>Connection {'>>'}</h1>
          <h1 
            className='text-4xl font-bold mx-2 text-orange-500 absolute'
            style={{ top: '0', left: 'calc(100% + 1px)', whiteSpace: 'nowrap' }} // Adjust positioning for overflow
          >
            Earning {'!!'}
          </h1>
        </div>

        <div className='text-lg mb-8'>
          <p className='mb-4 font-bold'>
            Connect with top brands, expand reach & earn big!
            <br />
            Simplify posting & sharing links with Froshare
          </p>
          <a href='https://play.google.com/store/apps/details?id=com.froker'   target="_blank" rel="noopener noreferrer">
          <OrangeBtn h={64} w={270}/></a>   
          
        </div>
      </div>

      {/* Image Section */}
      <div className='relative'>
        <img
          className='w-[1140px] h-[830px]'
          src='https://www.froker.in/static/media/mobilebg.7a1a4e658db53cfa3d93.png'
          alt='Background'
        />
        <img
          style={{ top: '111px', left: '349px' }}  // Inline style for positioning
          className='w-[761px] h-[704px] absolute'
          src='https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1712230785/Group_1171277340_2_qfluim.png'
          alt='Foreground'
        />
      </div>

    </div>
  );
}
