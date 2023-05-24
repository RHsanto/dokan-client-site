import Image from "next/image";
import img1 from "../../images/4.png";
import Slider from "react-slick";
const Discover = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
const discoData = [
  {id:"01",
  title: "",
  image:{img1},
  bg:"#E3FFE6"
  },
  {id:"02",
  title: "",
  image:{img1},
  bg:"#E79F01"
  },
  {id:"03",
  title: "",
  image:{img1},
  bg:"#E79F01"
  },
  {id:"04",
  title: "",
  image:{img1},
  bg:"#E79F01"
  }
]
  return (
    // <div className=" mx-auto py-32">
    //   <h3 className="pb-10">
    //     Discover more. <span className="opacity-50">Good things are waiting for you</span>{" "}
    //   </h3>

    //   <div className="lg:flex gap-10 p-5 lg:p-0">
    //   <Slider {...settings}>
    //   <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>
    //     <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>
    //     <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>
    //     <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>

    //     </Slider>
    //       </div>
    //     {/* <div className=" lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>
    //     <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>
    //     <div className=" lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div>
    //     <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue"
    //     >
    //       <div className="relative">
    //         <p>Explore new arrivals</p>
    //         <h4 className="pt-2">Shop the latest from top brands</h4>
    //         <button className="common-btn absolute bottom-0">Show me all</button>
    //       </div>
    //       <div>
    //         <Image src={img1} alt="img" />
    //       </div>
    //     </div> */}

    // </div>
    <div className="pl-52 -mr-[200px] py-20 w-full overflow-hidden">
      <h3 className="pb-10">
        Discover more. <span className="opacity-50">Good things are waiting for you</span>{" "}
      </h3>
      <Slider {...settings}>
        {discoData?.map((data)=>
        <div key={data.id} className="">
        <div style={{background:data.bg}} className= { ` mx-3 flex p-10 rounded-lg  `} >
          <div className="relative"> 
            <p>Explore new arrivals</p>
            <h4 className="pt-2">Shop the latest from top brands</h4>
            <button className="common-btn absolute bottom-0">Show me all</button>
          </div>
          <div>
            <Image src={img1} alt="img" />
          </div>
        </div>
      </div>
        )}
        
        {/* <div>
          <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue">
            <div className="relative">
              <p>Explore new arrivals</p>
              <h4 className="pt-2">Shop the latest from top brands</h4>
              <button className="common-btn absolute bottom-0">Show me all</button>
            </div>
            <div>
              <Image src={img1} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue">
            <div className="relative">
              <p>Explore new arrivals</p>
              <h4 className="pt-2">Shop the latest from top brands</h4>
              <button className="common-btn absolute bottom-0">Show me all</button>
            </div>
            <div>
              <Image src={img1} alt="img" />
            </div>
          </div>
        </div>
        <div>
          <div className="lg:w-[544px] lg:h-[306px] w-full flex p-10 rounded-lg bg-blue">
            <div className="relative">
              <p>Explore new arrivals</p>
              <h4 className="pt-2">Shop the latest from top brands</h4>
              <button className="common-btn absolute bottom-0">Show me all</button>
            </div>
            <div>
              <Image src={img1} alt="img" />
            </div>
          </div>
        </div> */}
     
      </Slider>
    </div>
  );
};

export default Discover;
