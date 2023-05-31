/* eslint-disable @next/next/no-img-element */
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sports = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then(res => res.json())
      .then(data => setProducts(data?.slice(3, 9)));
  }, []);

  return (
    <div className="lg:grid grid-cols-3 lg:px-32 p-10  gap-10">
      {products?.map(data => (
        <div
          key={data?.id}
          className="relative rounded-3xl shadow-lg
        bg-white p-9 hover:shadow-2xl cursor-pointer lg:mb-0 mb-6"
        >
          <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
            <img src={data?.bgImg} alt="img" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-offBlue">
                <img src={data?.proImg} alt="img" />
              </div>
              <p>{data?.product} products</p>
            </div>
            <div className="py-16">
              <p>Manufacturer</p>
              <h3 className="mt-2">{data?.name}</h3>
            </div>
            <Link href="/" className="mx-0">
              <button className=" hover:text-blue text-left font-bold flex items-center gap-2">
                See Collection <BsArrowRight />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;
