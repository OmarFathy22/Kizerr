import React from 'react';
const Trusted_by = [
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png",
  "	https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png",
  "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png",
]
const TrustedBy = () => {
  return (
  <ul className='mt-[10px] flex gap-[50px] justify-center items-center'>
    <h3 className='font-semibold text-[17px] text-gray-400'>Trusted By:&nbsp;&nbsp;</h3> 
    {Trusted_by.map((item , index) => (
      <li key={index}>
        <img className='w-[85px] h-[70px]' src={item} alt="" />
      </li>
    ))}
  </ul>
  );
}

export default TrustedBy;
