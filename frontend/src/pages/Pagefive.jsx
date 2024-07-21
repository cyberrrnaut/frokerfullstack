import { OrangeBtn } from '../components/OrangeBtn'
import { Infinitescroll } from '../components/Infinitescroll'

export function Pagefive() {
  return (
    <div className='bg-orange-100 h-[816px]'>
        
    <div className='flex justify-around pt-6'>
        <div>
            <img  className='h-[421px]  w-[330px]' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711186335/rocket_rw3kyp.png" alt="" />
        </div>
        <div className='pt-28 gap-4'>
            <h1 className='text-center text-7xl text-orange-500 font-bold'>Froshare</h1>

            <h1 className='text-center font-bold text-2xl pt-7  pb-7
            '>The Ultimate Affiliate Marketing Solution</h1>
            

            <div className='flex bg-neutral-700 h-[64px] w-[491px] rounded-full pt-2 justify-between pr-2 pl-4'>
            
            <div className='flex pt-3'> 
            <h1 className='text-white font-bold'>www.Froshare.in/
            </h1>
            <h1 className='text-orange-500 font-bold'>
            Your_name</h1> </div>
          
            <a href="https://play.google.com/store/apps/details?id=com.froker" target="_blank" rel="noopener noreferrer">
        <OrangeBtn h={50} w={226} />
      </a>
           
            </div>
           
        </div>
        <div>
        
            <img className='h-[381px] 2-[287px] pt-6' src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1711953091/Rectangle_pxe9sk.png" alt="" />
        
        
           
        
        </div>
        

       
    </div>
       

    <h1 className='text-center text-3xl '>
            Brand Unlocked for You !
        </h1>

        <Infinitescroll/>
    </div>
  )
}

