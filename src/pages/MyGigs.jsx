import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs';
const MyGigs = [
  {
    image : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title :"Stunning concept art",
    price : 50,
    sales : 12,    
    buyer : "Yoshi Tannamuri"
  },
  {
    image : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title :"Ai generated concept art",
    price : 62,
    sales : 16, 
    buyer : "Helen Bennett"
  },
  {
    image : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title :"	Illustration hyper realistic painting",
    price : 23,
    sales : 22,   
    buyer:"Roland Mendel" 
  },
  {
    image : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title :"Original ai generated digital art",
    price : 55,
    sales : 63,    
    buyer : "Maria Anders"
  },
  {
    image : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title :"	Text based ai generated art",
    price : 123,
    sales : 17,    
    buyer: "Amy Doe"
  },
  {
    image : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title :" Stunning concept art",
    price : 78,
    sales : 34,   
    buyer: "John Doe"
  },
]
const Index = () => {
  return (
    <div className='my-[100px]'>
      <div className='flex justify-between w-[70%] mx-auto my-6'>
        <h1 className='font-bold text-[30px] text-[#444]'>Gigs</h1>
      </div>
      <table className='w-[70%] mx-auto '>
        <tr className=' text-left'>
          <th>Image</th>
          <th >Title</th>
          <th >Price</th>
          <th >Sales</th>
          <th >Action</th>
        </tr>
       {
          MyGigs.map((gig , index) => { 
            return (
              <tr key={index} className={`${index % 2 === 0 && 'bg-[#1dbf730f]'} cursor-pointer`  }>
              
              <td className='p-[10px]'>
                  <img className='h-[40px] w-[70px]' src={gig.image} alt="" />
              </td>
                <td className=''><h3>{gig.title}</h3></td>
                <td className=''><p>${gig.price}</p></td>
              <td className=''>  <p>{gig.sales} Sales</p></td>
              <td className='text-red-600 text-[30px]'><p><BsFillTrashFill/></p></td>
              </tr>
            )
          }
          )
       }
      </table>
    </div>
  );
}

export default Index;
