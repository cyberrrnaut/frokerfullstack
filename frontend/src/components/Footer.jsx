import React from 'react'

export function Footer() {
  return (
    <div className='pt-14'>
      
      <div className='flex justify-around'>
     
     <div>
     <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg" alt="" />

     </div>

       <div> 
         </div>
       <div className='gap-2' >
        <h1 className='text-2xl font-bold text-orange-500'>    Quicklink</h1>   
       
       <a href='#top'>
       <div className='flex  pt-1 gap-2' >
        <img className='size-4 ' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" />
        <h1 className='text-xl'> Home</h1>
       </div>
       </a>
      
       <div className='flex' >
        <img className='size-4' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" />
        <h1 className='text-xl'> About us </h1>
       </div>
       <div className='flex' >
        <img className='size-4' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" />
        <h1 className='text-xl'> Privacy policy</h1>
       </div>
       <div className='flex' >
        <img className='size-4' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="" />
        <h1 className='text-xl'> Terms & Conditions</h1>
       </div>

       </div>
       <div>
        

       <h1 className='text-orange-500 font-bold text-xl'> Contacts </h1>
        
        <div className='flex'>
        <img className='pt-4 ' src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580256/froker/kufnt4eknvembyiamhun.png" alt="" /> 
       
        <a href='https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu' target="_blank">
        <h1 className='pt-5 pl-2'> Whitefield, Bengaluru, 560066</h1>
           </a>
       
        
        </div>
        

        
          
     

        <a href="mailto:email@example.com">
        <div className='flex'>
        <img  className='pt-4 pl-2'  src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580464/froker/cdgbbjwfwyjaneyjzwl9.png" alt="" />
        <h1 className='pt-4 pl-2'> support@froker.in</h1>
        </div>
        </a>
       
        


        <div className='flex gap-4 items-center justify-center pt-4 pb-4 pr-20'>

          

           <a href='https://x.com/FrokerSocial' target='_blank'>
           <img className='cursor-pointer' src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580721/froker/bhqijupxqx8ghd2pob92.png" alt="" />

           </a>

           <a href='https://www.linkedin.com/company/froker/' target='_blank'>
           <img src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580738/froker/gqiqxipnimqbspmt8gvm.png" alt="" />

           </a>

           <a href='https://www.facebook.com/people/Froker/100090044834703/?mibextid=YMEMSu' target='_blank'>
           <img src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580746/froker/ubjnt5pxkppjxid5aj4q.png" alt="" />

           </a>

           
           <a href='https://www.instagram.com/frokerofficial/' target='_blank'>
           <img src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580761/froker/bkah8vyxjoa7iqmldpfh.png" alt="" />

           </a>

           <a href='https://www.youtube.com/@frokerofficial' target='_blank'>
           <img src="https://res.cloudinary.com/dde0qo4wb/image/upload/v1721580775/froker/uid9wurpv0ae5o97cmi5.png" alt="" />

           </a>


        

        </div>
       </div>
       <div className=''>
        <h1 className='text-2xl font-bold text-orange-500'> Scan To Download       </h1>
        <img  className='pt-4' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009706/Frokerassets/froker-1-3-10_pb9yln.jpg" alt="" />
       </div>
      </div>
        
      <div className='relative'>
        <img 
          className='w-full' 
          src="https://www.froker.in/static/media/base.3f5339217a654a163327574449f303a4.svg" 
          alt="Base logo" 
        />
        <h1 className='absolute inset-0 flex items-center justify-center text-white text-lg font-bold'>
          © 2024 Arroz Technology. All rights reserved
        </h1>
      </div>
       
    </div>
  )
}

