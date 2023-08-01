import React from 'react';

const JoinFiver = () => {
  return (
    <div className='relative  w-[90%] mx-auto mb-[100px] '>
      <img className='bg-center bg-no-repeat	bg-cover w-full max-h-[350px]' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />
    <div className='absolute left-[100px] top-[100px] flex flex-col gap-[30px]'>
        <h1 className='text-[50px] text-white'>Suddenly it&apos;s all so doable.</h1>
        <button className=' text-white text-[18px] font-semibold bg-[var(--primaryColor)] max-w-[150px] py-[10px] rounded-[5px] hover:opacity-[0.9] transition-all'>Join Kizerr</button>
    </div>

    </div>
  );
} 

export default JoinFiver;
