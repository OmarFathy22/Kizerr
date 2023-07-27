import React from 'react';
import {PiArrowsCounterClockwiseFill} from 'react-icons/pi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
const SideContent = ({gig , seller}) => {
  return (
    <div className=" w-[400px] flex flex-col gap-[20px]   float-right sticky  mr-[10%]  !top-0 ">
      <div className=" w-full border-[1px] my-[50px] border-[#cccaca] rounded-md shadow-lg flex flex-col gap-[20px]  p-4">
            <div className='flex justify-between '>
              <p className='font-bold'>{gig?.shortTitle}</p>
              <p className='text-[#444]'>${gig?.price}</p>
            </div>
            <p className='text-[var(--gC)] '>{gig?.shortDesc}</p>
            <div className='flex justify-between'>
              <p className='flex items-center gap-1 text-[var(--gC)]'><AiOutlineClockCircle/>{gig?.deliveryTime} Days Delivery</p>
              <p className='flex items-center gap-1 text-[var(--gC)]'><PiArrowsCounterClockwiseFill/>{gig?.revisionNumber} Revisions</p>
            </div>
            <ul>
              {gig?.features?.map((item , index) => (
              <li key={index} className='flex items-center gap-1 text-[var(--gC)]'><BsCheckLg className='text-[var(--primaryColor)]'/>{item}</li>
              ))}
            </ul>
            
            <button className='bg-[var(--primaryColor)] w-full mx-auto text-white py-2 rounded-md'>Continue</button>
      </div>
    </div>
  );
}

export default SideContent;
