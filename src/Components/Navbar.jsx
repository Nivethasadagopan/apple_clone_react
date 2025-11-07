import React from "react";
import applelogo from "../assets/apple.png";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const navLink = [
  { name: "Store", href: "#" },
  { name: "Mac", href: "#" },
  { name: "iPad", href: "#" },
  { name: "iPhone", href: "#" },
  { name: "Watch", href: "#" },
  { name: "TV", href: "#" },
  { name: "AirPods", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Support", href: "#" },
];

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white px-6 py-3">
      <div className="flex items-center justify-center ">
    
        <a href="#">
          <img src={applelogo} alt="Apple" className="h-6 w-auto mr-2" />
        </a>

        
        <ul className="flex items-center space-x-6">
          {navLink.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-gray-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}

    
          <li>
            <a href="#" className="hover:text-gray-400">
              <FiSearch size={20} />
            </a>
          </li>

        
          <li>
            <a href="#" className="hover:text-gray-400">
              <FiShoppingBag size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
