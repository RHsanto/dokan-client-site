/* eslint-disable @next/next/no-img-element */

import OneBox from "../Home/CardBoxs/OneBox";
import TwoBox from "../Home/CardBoxs/TwoBox";
import ThreeBox from "../Home/CardBoxs/ThreeBox";
import FourBox from "../Home/CardBoxs/FourBox";
const NewArrivals = () => {
  return (
    <div className="container mx-auto lg:px-32">
      <h3 className="lg:pb-10 pb-20 lg:pt-14 ">
        New Arrivals.<span className="opacity-50"> REY backpacks & bags </span>
      </h3>
      <div className="border-b-2 grid lg:grid-cols-4 gap-10 lg:py-16 py-5 m-5 lg:m-0">
       <OneBox/>
       <TwoBox/>
       <ThreeBox/>
       <FourBox/>
      </div>
    </div>
  );
};

export default NewArrivals;
