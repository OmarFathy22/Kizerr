import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import NewRequest from "../utils/NewRequest";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
const Index = () => {
  const { isLoading: isLoadingOrders, errorOrders, data: orders } = useQuery({
    queryKey: "orders",
    queryFn: () => NewRequest(`/getOrders`).then((res) => res.data),
  });
  if(isLoadingOrders)return <Loading/>
  if(errorOrders)return <h1>Error....</h1>
  return (
    <div className="my-[100px]">
      <div className="flex justify-between w-[70%] mx-auto my-6">
        <h1 className="font-bold text-[30px] text-[#444]">Orders</h1>
      </div>
      <table className="w-[70%] mx-auto ">
        <tr className=" text-left">
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Buyer</th>
          <th>country</th>
          <th>Action</th>
        </tr>
        {orders.map((order, index) => {
          return (
            <tr
              key={index}
              className={`${
                index % 2 === 0 && "bg-[#1dbf730f]"
              } cursor-pointer`}
            >
              <td className={`p-[10px] w-[calc(100%/6)] `}>
                <img className="h-[40px] w-[70px]" src={order?.img} alt="" />
              </td>
              <td className={`w-[calc(100%/6)] `}>
                <h3>{order?.title}</h3>
              </td>
              <td className={`w-[calc(100%/6)] `}>
                <p>${order?.price}</p>
              </td>
              <td className={`w-[calc(100%/6)] `}>
                {" "}
                <p>{order?.buyerUsername} </p>
              </td>
              <td className={`w-[calc(100%/6)] `}>
                {" "}
                <p>{order?.buyerCountry} </p>
              </td>
              <td className={`text-blue-500 text-[30px] w-[calc(100%/6)] `}>
                <p>
                  <AiOutlineMail />
                </p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Index;
