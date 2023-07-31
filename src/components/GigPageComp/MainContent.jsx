import React from "react";
import { useState } from "react";
import HeaderContent from "./HeaderContent";
import GigSlider from "./GigSlider";
import SideContent from "./SideContent";
import { PeopleSay } from "../../../data";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import NewRequest from "../../utils/NewRequest";
import Loading from "../Loading";
import Reviews from "./Reviews";

// Parse the date string

const GigMedia = ({ gig }) => {
  return (
    <div>
      <GigSlider>
        {gig?.images?.map((item, index) => (
          <div key={index} className="flex justify-center items-center ">
            <img
              className="!object-cover h-[400px] w-[1000px]"
              src={
                item ||
                "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="img"
            />
          </div>
        ))}
      </GigSlider>
    </div>
  );
};

const WhatPeopleSay = ({ gig }) => {
  return (
    <div className="my-[100px]">
      <div className="flex justify-between w-[48%]">
        <h1 className="text-[20px] font-bold">
          What people loved about this seller
        </h1>
        <a
          href={"#all_reviews"}
          className="text-[var(--primaryColor)] font-medium"
        >
          see all reviews
        </a>
      </div>
      <GigSlider>
        {PeopleSay.map((item, index) => (
          <div
            key={index}
            className="flex justify-center flex-col gap-[10px]  border rounded-md  mx-auto  py-[20px] px-10 "
          >
            <div className="flex gap-[10px] ">
              <img
                className=" rounded-full !object-cover h-[30px] w-[30px]"
                src={item.subImg}
                alt="img"
              />
              <h1 className="font-semibold text-[#555]">{item.name}</h1>
              <div />
              <div className="h-[20px] bg-gray-200 w-[1px]" />
              <h1 className="flex gap-1 text-[var(--starColor)] items-start text-[20px] relative ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p className="text-[15px] font-bold absolute top-[-1px] right-[-15px]">
                  5
                </p>
              </h1>
            </div>
            <div className="">
              <p className=" line-clamp-2">{item.desc}</p>
              <p className="text-gray-400">1 week ago</p>
            </div>
          </div>
        ))}
      </GigSlider>
    </div>
  );
};
const AboutGig = ({ gig }) => {
  return (
    <div className="w-[48%]">
      <h1 className="text-[20px] font-bold my-[20px]">About this gig</h1>
      <div className="text-[#555]">{gig?.desc}</div>
      <hr className="my-[30px]" />
      <div className="flex justify-between">
        <div className="">
          <p className="text-[#888]">Design style</p>
          <p className="text-[#666]">Illustrative</p>
        </div>
        <div>
          <p className="text-[#888]">Genre</p>
          <p className="text-[#666]">
            Arts Children&apos;s books Comic Fantasy
          </p>
        </div>
        <div>
          <p className="text-[#888]">File format</p>
          <p className="text-[#666]">JPG PDF PNG PSD</p>
        </div>
      </div>
    </div>
  );
};

const AboutSellerHeader = ({ seller }) => {
  return (
    <div className="w-[48%] mt-[100px]">
      <h1 className="text-[20px] font-bold my-[20px]">About the Seller</h1>
      <div className="flex gap-[30px]">
        <div>
          <img
            className={`rounded-full h-[120px] w-[120px] object-cover  `}
            src={seller?.img || "/no_avatar.png"}
            alt="img"
          />
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <h1 className="text-[20px] font-bold">{seller.username}</h1>
          <h1 className="text-[18px] text-[#555] font-medium">
            {seller?.title || "AI Art Expert"}
          </h1>
          <h1 className="text-[#ffc108] flex items-center   ">
            <AiFillStar /> <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </h1>
          <button className="p-[10px] px-[30px] mt-[20px] border border-gray-500  rounded-md hover:text-white hover:bg-[#888] transition-all ">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutSellerBody = ({ seller }) => {
  const data = [
    {
      title: "From",
      value: "Belarus",
    },
    {
      title: "Avg. response time",
      value: "4 hours",
    },
    {
      title: "Member Since",
      value: "Feb 2020",
    },
    {
      title: "Last delivery",
      value: "about 8 hours",
    },
    {
      title: "Languages",
      value: "English, Russian, Belarusian",
    },
  ];
  return (
    <div className="w-[48%] mt-[50px] border p-[20px] rounded-md">
      <ul className="grid grid-cols-3 gap-[30px]">
        {data.map((item, index) => (
          <li key={index} className="flex flex-col gap-1">
            <h1 className="text-[#666]">{item.title}</h1>
            <h1 className="text-[#666] font-semibold">{item.value}</h1>
          </li>
        ))}
      </ul>
      <hr className="my-[20px]" />
      <h1 className="text-[#666] font-semibold">description</h1>
      <p className="text-[#444]">
        {seller?.desc ||
          "loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
    </div>
  );
};

const CreateReview = ({ gig }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newReview) => NewRequest.post("/reviews", newReview),
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
    onError: (error) => {
      // @ts-ignore
      setError(error.response.data);
    },
  });
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(0);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      star: selectedStar + 1,
      desc: desc,
      gigId: gig?._id,
      username: JSON.parse(localStorage.getItem("currentUser")).username,
      country: JSON.parse(localStorage.getItem("currentUser")).country,
      img: JSON.parse(localStorage.getItem("currentUser")).img,
    };
    setSelectedStar(0);
    setDesc("");
    // @ts-ignore
    mutation.mutate(newReview);
  };
  const handleStarHover = (index) => {
    setHoveredStar(index);
  };

  const handleStarLeave = () => {
    setHoveredStar(null);
  };
  const handleStarClick = (index) => {
    setSelectedStar(index);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 mt-[40px] w-[48%]"
      >
        <textarea
          value={desc}
          onChange={handleDescChange}
          className="p-5 w-full border-[2px] rounded-md outline-none resize-none"
          placeholder="give review to this seller.."
          rows={5}
        />
        <div className="text-gray-300 flex items-center text-[25px] ">
          {Array(5)
            .fill()
            .map((item, index) => (
              <AiFillStar
                key={index}
                className={`cursor-pointer ${
                  index <= hoveredStar || index <= selectedStar
                    ? "text-[--starColor]"
                    : ""
                }`}
                onMouseEnter={() => handleStarHover(index)}
                onMouseLeave={handleStarLeave}
                onClick={() => handleStarClick(index)}
              />
            ))}
        </div>
        <button className="bg-[#ffc108] text-white p-3 rounded-md">
          submit
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

const MainContent = () => {
  const { id } = useParams();
  const { isLoading: isLoadingGigs, error: errorGigs, data: gig } = useQuery(
    id,
    () => NewRequest(`gig/${id}`).then((res) => res.data)
  );
  const UserId = gig?.userId;
  const {
    isLoading: isLoadingUsers,
    error: errorUsers,
    data: seller,
  } = useQuery({
    queryKey: "userId",
    queryFn: () => NewRequest(`users/${UserId}`).then((res) => res.data),
    enabled: !!UserId,
  });
  if (isLoadingUsers || isLoadingGigs) return <Loading />;
  if (errorUsers || errorGigs) return <h1>error</h1>;
  return (
    <div className="ml-[10%] !relative  my-[100px] ">
      {seller && (
        <div>
          <SideContent gig={gig} seller={seller} />
          <HeaderContent gig={gig} seller={seller} />
          <GigMedia gig={gig} />
          <WhatPeopleSay gig={gig} />
          <AboutGig gig={gig} />
          <AboutSellerHeader seller={seller} />
          <AboutSellerBody seller={seller} />
          <Reviews />
          <CreateReview gig={gig} />
        </div>
      )}
    </div>
  );
};
// make
export default MainContent;
