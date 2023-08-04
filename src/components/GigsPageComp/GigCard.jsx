import  React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const GigCard = ({ item }) => {

  return (
    <div>
      <Link
        key={item._id}
        to={`/gig/${item?._id}`}
        className="flex flex-col gap-2 border-[1px] border-[#d2cccc] shadow-lg rounded-sm mt-[50px] max-w-[320px]  "
      >
        <div className="">
          <img
            className="w-full max-h-[250px] rounded-t-sm object-contain"
            src={
              item?.cover ||
              "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            alt="img"
          />
        </div>
        <div className="px-6 flex flex-col gap-2">
          <div className=" flex items-center gap-3 ">
            <img
              className="rounded-full h-[40px] w-[40px] !object-cover  "
              src={
                item.subImg ||
                "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="img"
            />
            <h1 className="font-semibold text-[#333]">
              {item?.username || "Lannie Coleman"}
            </h1>
          </div>
          <p className="truncate">
            {item.title ||  "I will create a professional logo design for your brand"}
          </p>
          <div className="text-[#ffc108] flex items-center gap-1  ">
            <AiFillStar />
            <p className="text-[#444]">({item.starNumber})</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center px-6 ">
          <div>
            <AiFillHeart className="text-[#333] text-[20px]" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>STARTING AT</p>{" "}
            <p>
              {item.price} <sup>99</sup>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GigCard;
