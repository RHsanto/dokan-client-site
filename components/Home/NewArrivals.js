/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import img from "../../images/products/1.png";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const NewArrivals = () => {
  const [love, setLove] = useState(1);

  const handleLove = () => {
    setLove(1);
  };

  const removeLove = () => {
    setLove(-1);
  };

  // color

  const colorCategory = [
    { id: "01", bg: "#FBBF24", dw: "26px", dh: "26px", bw: "20px", bh: "20px", br: "9999px" },
    { id: "02", bg: "#0EA5E9", dw: "26px", dh: "26px", bw: "20px", bh: "20px", br: "9999px" },
    { id: "03", bg: "#EF4444", dw: "26px", dh: "26px", bw: "20px", bh: "20px", br: "9999px" },
    { id: "04", bg: "#66D78F", dw: "26px", dh: "26px", bw: "20px", bh: "20px", br: "9999px" },
    { id: "05", bg: "#000", dw: "26px", dh: "26px", bw: "20px", bh: "20px", br: "9999px" },
  ];

  return (
    <div className="container mx-auto lg:px-32">
      <h3 className="lg:pb-10 pb-20 lg:pt-14 ">
        New Arrivals.<span className="opacity-50"> REY backpacks & bags </span>
      </h3>
      <div className="grid lg:grid-cols-4 gap-10 p-5 lg:p-0">
        <div>
          <div className="bg-bgWhite rounded-2xl relative">
            <Image src={img} alt="img" />
            {love === 1 ? (
              <div
                onClick={removeLove}
                className="absolute shadow-lg p-[10px] bg-white rounded-full top-3 right-3 cursor-pointer"
              >
                <AiOutlineHeart className="text-2xl" />
              </div>
            ) : (
              <div
                onClick={handleLove}
                className="absolute shadow-lg p-[10px] text-red bg-white rounded-full top-3 right-3 cursor-pointer"
              >
                <AiFillHeart className="text-2xl" />
              </div>
            )}
          </div>
          <div className="product_info  p-3 relative">
            <div className="color_category gap-2 flex py-3">
              {colorCategory.map(data => (
                <div
                  key={data?.id}
                  style={{
                    border: `2px solid ${data?.bg}`,
                    width: data?.dw,
                    height: data?.dh,
                    borderRadius: data?.br,
                  }}
                  className=" p-[1px] "
                >
                  <button
                    style={{
                      backgroundColor: data?.bg,
                      width: data?.bw,
                      height: data?.bh,
                      borderRadius: data?.br,
                    }}
                  ></button>
                </div>
              ))}

              {/* <div className=" p-[1px] w-[26px] h-[26px] border-2 border-red  rounded-full">
                <button className="w-[20px] h-[20px] bg-red rounded-full "></button>
              </div>
              <div className=" p-[1px] w-[26px] h-[26px] border-2 border-blue  rounded-full">
                <button className="w-[20px] h-[20px] bg-blue rounded-full "></button>
              </div>
              <div className=" p-[1px] w-[26px] h-[26px] border-2 border-green  rounded-full">
                <button className="w-[20px] h-[20px] bg-green rounded-full "></button>
              </div>
              <div className=" p-[1px] w-[26px] h-[26px] border-2 border-black  rounded-full">
                <button className="w-[20px] h-[20px] bg-black rounded-full "></button>
              </div> */}
            </div>
            <div className="product_details py-3">
              <h5>Leather Gloves</h5>
              <p className="pt-1">Perfect mint green</p>
              <div className="price_review py-5 flex justify-between">
                <button className="text-green font-bold border-2 px-2 rounded-lg border-green">
                  $99.00
                </button>
                <p className="flex items-center">
                  <AiFillStar className="text-yellow" /> 4.5 (62 reviews)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>css</div>
        <div>sssss</div>
        <div>ssss</div>
      </div>
    </div>
  );
};

export default NewArrivals;
