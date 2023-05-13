import Link from "next/link";
import { RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="container mx-auto px-32 h-20  flex justify-between items-center">
      <div className="logo">
        <Link href="/">
          <h4>Dokan</h4>
        </Link>
      </div>
      <div className="font-medium">
        <li className="hover:bg-offWhite py-2 rounded-full">
          <a>
            <Link href="/men">Men</Link>
          </a>
        </li>
        <li className="hover:bg-offWhite py-2 rounded-full">
          <a>
            <Link href="/women">Women</Link>
          </a>
        </li>
        <li className="hover:bg-offWhite py-2 rounded-full">
          <a>
            {" "}
            <Link href="/beauty">Beauty</Link>
          </a>
        </li>
        <li className="hover:bg-offWhite py-2 rounded-full">
          <a>
            <Link href="/sport">Sport</Link>
          </a>
        </li>
        <li className="hover:bg-offWhite py-2 rounded-full">
          <a>
            <Link href="/contact">Contact</Link>{" "}
          </a>
        </li>
      </div>
      <div>
        <li className="text-2xl  border-2 border-black rounded-full p-2">
          <RiSearch2Line />
        </li>
        <li className="mx-2 text-2xl  border-2 border-black rounded-full p-2">
          <BiUser />
        </li>
        <li className="text-2xl  border-2 border-black rounded-full p-2">
          <RiShoppingCartLine />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
