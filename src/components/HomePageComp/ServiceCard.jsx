import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({card}) => {
  return (
    <Link to={`/gigs?cat=${card?.title}`} className='relative hover:opacity-[0.85] transition-all duration-500 cursor-pointer'>
      <div className='absolute top-3 left-3 text-white'>
        <p>{card?.desc}</p>
        <h1  className='text-[25px] font-bold '>{card?.title}</h1>
      </div>
      <div className='h-[350px] w-[250px] rounded-md'>
        <img className='h-full w-full rounded-md' src={card?.img} alt="service" />
      </div>
    </Link>
  );
}

export default ServiceCard;
