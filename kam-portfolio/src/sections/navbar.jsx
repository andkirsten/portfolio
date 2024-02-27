import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-4 text-[#353535] text-2xl">
      <ul className="flex gap-24 justify-center">
        <li className="mx-4">
          <a href="#" className="font-josefin">
            Experience
          </a>
        </li>
        <li className="mx-4">
          <a href="#" className="font-josefin">
            Projects
          </a>
        </li>
        <li className="mx-4">
          <a href="#" className="font-josefin">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
