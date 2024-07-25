import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 flex justify-between p-4">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <FaHome className="icons" />
        </Link>
        <Link href={"/ticketpage/new"}>
          <FaTicket className="icons" />
        </Link>
      </div>
      <div>
        <p className="text-white">fakemail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
