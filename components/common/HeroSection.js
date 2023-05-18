/* eslint-disable @next/next/no-img-element */
import slider1 from "../../images/sliderImg/slider1.png";
import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
const HeroSection = () => {
  return (
    <div className="bg-primary">
      <div className=" px-32 py-5 container mx-auto">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="col-span-1"
          >
            <p className="text-xl py-5">In this season, find the best 🔥</p>
            <h1 className="leading-normal ">Exclusive collection for everyone</h1>

            <button className="hero-btn flex items-center gap-2">
              Explore now <RiSearch2Line className="text-xl" />
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="col-span-1"
          >
            <Image src={slider1} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
