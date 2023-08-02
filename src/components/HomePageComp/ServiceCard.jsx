import { Link } from 'react-router-dom';
const ServiceCard = ({card}) => {
   const title = card.title.toLowerCase().split(' ')[0];
  return (
    <div className='mx-[25px] relative hover:opacity-[0.85] transition-all duration-500 cursor-pointer'>
        <Link to={`/gigs?cat=${title}`}>
          <div className='absolute top-3 left-3  text-white'>
            <p>{card?.desc}</p>
            <h1  className='text-[25px] font-bold '>{card?.title}</h1>
          </div>
          <div className='h-[350px]   w-full rounded-md'>
            <img className='h-full w-full rounded-md' src={card?.img} alt="service" />
          </div>
        </Link>
    </div>
  );
}

export default ServiceCard;
