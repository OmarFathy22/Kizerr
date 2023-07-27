import React, { useEffect } from "react";
import { useLocation } from "react-router";
import GigCard from "../components/GigsPageComp/GigCard";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useQuery } from "react-query";
import NewRequest from "../utils/NewRequest";
import Loading from "../components/Loading";

const Gigs = () => {
  const { search } = useLocation();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [open, setOpen] = useState(false);
  const [sortby, setSortby] = useState("createdAt");
  const [bestOrPop, setBestOrPop] = useState("Newest");
  const { isLoading, error, data, refetch } = useQuery(
    "repoData",
    async () =>
      await NewRequest(
        `/gigs?${search}&min=${min}&max=${max}&sort=${sortby}`
      ).then((res) => res.data)
  );
  useEffect(() => {
    refetch();
  }, [sortby]);
  if (isLoading) return <Loading/>
  if (error) console.log(error);
  const apply = () => {
    refetch();
  };
  return (
    <div className="my-[50px]">
      <div className="mx-[4%]">
        <div className="flex flex-col gap-5">
          <p className="text-[#b8b6b6]">Graphic & Design</p>
          <h1 className="text-[30px] font-semibold">AI Artist</h1>
          <p className="text-[#444]">
            Explore the boundaries of art and technology with Fiverr&apos;s AI
            artists
          </p>
        </div>
        <div className="flex justify-between items-start mt-10">
          <div className="flex items-center gap-5">
            <p className="text-[#444]">Budget</p>
            <div>
              <input
                onChange={(e) => {
                  setMin(e.target.value);
                }}
                className="p-1 mr-2 border-[2px] rounded-md outline-[--primaryColor] min-w-[200px]"
                type="number"
                max={max}
                min={0}
                placeholder="min"
              />
              <input
                onChange={(e) => {
                  setMax(e.target.value);
                }}
                className="p-1 border-[2px] rounded-md outline-[--primaryColor] min-w-[200px]"
                type="number"
                min={min}
                max={1000}
                placeholder="max"
              />
            </div>
            <button
              className="bg-[var(--primaryColor)] px-2 py-1 text-white rounded-md clickable"
              onClick={apply}
            >
              Apply
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-[15px] text-[#555]">Sort by</p>
            <div
              className="flex items-center font-bold relative cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {bestOrPop}
              <MdKeyboardArrowDown className="cursor-pointer text-[20px]" />
              {open && (
                <ul className="absolute top-7 right-0 flex flex-col gap-3 p-3 border-[1px] border-[#888] rounded-md bg-white">
                  <li
                    onClick={() => {
                      setSortby("createdAt");
                      setBestOrPop("Newest");
                      setOpen(false);
                    }}
                    className="text-[#666] font-medium cursor-pointer"
                  >
                    Newest
                  </li>
                  <li
                    onClick={() => {
                      setSortby("price");
                      setBestOrPop("Best Selling");
                      setOpen(false);
                    }}
                    className="text-[#666] font-medium cursor-pointer"
                  >
                    Popular{" "}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-10 justify-center items-center ">
        {data?.map((item, index) => {
          return <GigCard key={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Gigs;
