import React from "react";
import { useNavigate } from "react-router";
const MyGigs = [
  {
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Stunning concept art",
    price: 50,
    sales: 12,
    buyer: "Yoshi Tannamuri",
    date: "1 hour ago",
    id: 1
  },
  {
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Ai generated concept art",
    price: 62,
    sales: 16,
    buyer: "Helen Bennett",
    date: "2 hours ago",
    id: 2
  },
  {
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "	Illustration hyper realistic painting",
    price: 23,
    sales: 22,
    buyer: "Roland Mendel",
    date: "5 days ago",
    id: 3
  },
  {
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Original ai generated digital art",
    price: 55,
    sales: 63,
    buyer: "Maria Anders",
    date: "1 week ago",
    id: 4
  },
  {
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "	Text based ai generated art",
    price: 123,
    sales: 17,
    buyer: "Amy Doe",
    date: "1 week ago",
    id: 5
  },
  {
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: " Stunning concept art",
    price: 78,
    sales: 34,
    buyer: "John Doe",
    date: "2 weeks ago",
    id: 6
  },
];
const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="my-[100px]">
      <div className="flex justify-between w-[70%] mx-auto my-6">
        <h1 className="font-bold text-[30px] text-[#444]">Gigs</h1>
      </div>
      <table className="table-auto w-[90%] mx-auto border-spacing-2">
        <tr className=" text-left">
          <th className="px-5  py-5  ">Buyer</th>
          <th>Last Message</th>
          <th>Date</th>
          <th className="px-5">Action</th>
        </tr>
        {MyGigs.map((gig, index) => {
          return (
            <tr
            onClick={() => {
              navigate(`/message/${gig.id}`);
            }}
              key={index}
              className={`${
                index < 2 && "bg-[#1dbf730f]"
              } cursor-pointer mx-10 `}
            >
              <td className="px-5 py-5  ">
                <h3 className="font-bold ">{gig.buyer}</h3>
              </td>
              <td className=" pt-[20px] line-clamp-1 w-[900px]">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate quam reiciendis ab adipisci officiis unde eos,
                  corporis dolorem repellendus illum a perferendis dolorum
                  necessitatibus architecto eligendi rem. Fugiat, veritatis sed.
                </p>
              </td>
              <td className="">
                {" "}
                <p>{gig.date}</p>
              </td>
              {index < 2 && (
                <td className="px-5">
                  <button className=" text-white bg-[var(--primaryColor)] font-semibold text-[13px] px-3 py-2 rounded-sm">
                    Mark As Read
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Index;
