import React, { useEffect } from 'react';
import NewRequest from '../utils/NewRequest';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const parmas = new URLSearchParams(search);
  const payment_intent = parmas.get('payment_intent');

  return (
    useEffect(() => {
      const Request = async() => {
        try {
          await NewRequest.put('/orders',{payment_intent});
        } catch (error) {
          console.log(error.message);
        }
      }
      setTimeout(() => {
        Request();
        // navigate('/orders');
      }, 400000000);
    }, []),
    <div className='min-h-[85vh] flex justify-center items-center flex-col'>
      <h1 className='font-bold text-[--primaryColor] text-[30px] mb-[20px]'>Payment Successful!</h1>
      <p className='text-center w-[320px] f'>We are delighted to inform you that we received your payments</p>
        <Link to='/orders' className='bg-[--primaryColor] mt-[50px] mb-[20px] text-center  rounded-md p-1 px-2 text-white font-bold'>View Orders</Link>
        <Link to='/gigs' className='underline text-[--primaryColor]  text-center  rounded-md p-1 px-2  font-bold'>Continue Shopping</Link>
    </div>
  );
}

export default Success;
