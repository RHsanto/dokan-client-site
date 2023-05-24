/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import slider1 from "../../images/sliderImg/slider1.png";
import slider3 from "../../images/sliderImg/slider3.png";
import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSection = () => {
  return (
    // <div className="bg-primary">
    // <div className=" container  mx-auto">
    //   <div className="grid lg:grid-cols-2 gap-4 items-center">
    //     <div
    //       data-aos="fade-right"
    //       data-aos-offset="300"
    //       data-aos-easing="ease-in-sine"
    //       className="col-span-1"
    //     >
    //       <p className="text-xl py-5">In this season, find the best 🔥</p>
    //       <h1 className="leading-normal ">Exclusive collection for everyone</h1>

    //       <button className="mt-8  hero-btn flex items-center gap-2">
    //         Explore now <RiSearch2Line className="text-xl" />
    //       </button>
    //     </div>
    //     <div
    //       data-aos="fade-left"
    //       data-aos-anchor="#example-anchor"
    //       data-aos-offset="500"
    //       data-aos-duration="500"
    //       className="col-span-1"
    //     >
    //       <Image src={slider1} alt="img" />
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div className="bg-primary">
      <div className="container mx-auto lg:px-32 p-5">
        <Swiper
          loop={true}
          autoplay={{ delay: 4500}}
          pagination={{ clickable: true}}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="col-span-1"
              >
                <p className="text-xl py-5">In this season, find the best 🔥</p>
                <h1 className="leading-normal ">Exclusive collection for everyone</h1>

                <button className="mt-8  hero-btn flex items-center gap-2">
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
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="col-span-1"
              >
                <p className="text-xl py-5">In this season, find the best 🔥</p>
                <h1 className="leading-normal ">Exclusive collection for everyone</h1>

                <button className="mt-8  hero-btn flex items-center gap-2">
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
                <Image src={slider3} alt="img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
