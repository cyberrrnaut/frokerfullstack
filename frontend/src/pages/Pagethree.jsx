//import { useState } from 'react';
import { InputBox } from '../components/InputBox.jsx';
import '../App.css'; // Make sure to import your CSS file

export function Pagethree() {
  // const [value1, setValue1] = useState<number>(500);
  // const [value2, setValue2] = useState<number>(500);

  // const handleValue1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue1(Number(event.target.value));
  // };

  // const handleValue2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue2(Number(event.target.value));
  // };

  return (
    <div className='pl-48 pt-16 pb-12'>
      <div className='flex flex-col md:flex-row items-center mb-8'>
        <img
          className='w-[128px] h-[128px] pr-3'
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711104809/Untitled_design_-_2024-03-20T182856_1_bvfuoa.png"
          alt="Influencer Potential"
        />
        <div className='text-center md:text-left'>
          <h1 className='text-orange-500 font-bold text-4xl mb-4'>
            Unlock Your Influencer Potential!
          </h1>
          <h2 className='font-bold text-2xl'>
            Get a Quick Snapshot of Your Earning Potential.
          </h2>
        </div>
      </div>
      <div className='h-[440px] w-[1485px] border border-black shadow-lg rounded-2xl  p-8 flex flex-col gap-7'>
        <InputBox
          text="I have 300k Followers on Instagram"
          value={300}
          thousand={true} 
          min={1} 
          max={1000}
          // onChange={handleValue1Change}
        />
        <InputBox
          text="I typically share around 50 Posts on instagram (Per Month)"
          value={50}
          thousand={false} 
          min={0} 
          max={100}
         // onChange={handleValue2Change}
        />
        <h1 className='text-xl'>You have the potential to earn an additional ₹2L ! </h1>
        <h1>*Based on estimates that 1% to 5% of your followers make direct purchases from your store.</h1>
      </div>
    </div>
  );
}




