import { Link } from "react-router-dom";
 
 const Navbar = () => {
  return (
    <div className="sticky w-full px-8 py-4 bg-purple-700">
      <div className="flex items-center">
        <div className="flex-1">
          <img src="/vite.svg" alt="" className="cursor-pointer transform transition duration-200 hover:scale-110"/>
        </div>
        <div className="flex-1 flex justify-end">
          <ul className="flex gap-6   text-white text-xl">
            <li className="cursor-pointer">
              <Link to={"/"}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/about"}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/service"}>
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;      
