import Image from "next/image";
import img from "../../images/chil.png";

const SpecialOffer = () => {
  return (
    <div className="container mx-auto lg:px-32   my-20">
      <div className="p-10 lg:p-0 lg:grid grid-cols-2 gap-10  items-center bg-[#FEFCE8] rounded-2xl">
        <div>
          <Image src={img} alt="img" />
        </div>
        <div className="p-10">
          <h4>Dokan</h4>
          <h1 className="my-10 leading-[80px]">Special offer in kids products</h1>
          <div className="my-10">
          <span>Fashion is a form of self-expression and autonomy at a particular period and place.</span>
          </div>
          <button className="active-btn">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
