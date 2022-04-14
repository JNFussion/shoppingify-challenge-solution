import React from "react";
import {
  MdOutlineShoppingCart,
  MdOutlineFormatListBulleted,
  MdInsertChartOutlined,
  MdReplay,
} from "react-icons/md";
import Logo from "../assets/images/logo.svg";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav className="min-h-screen w-fit px-6 py-9 flex flex-col items-center justify-between bg-white">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="grid gap-4">
        <li>
          <NavbarLink
            path="/items"
            icon={<MdOutlineFormatListBulleted />}
            tooltipText="Items"
          />
        </li>
        <li>
          <NavbarLink
            path="/history"
            icon={<MdReplay />}
            tooltipText="History"
          />
        </li>
        <li>
          <NavbarLink
            path="/statistics"
            icon={<MdInsertChartOutlined />}
            tooltipText="Statistics"
          />
        </li>
      </ul>
      <div>
        <button type="button" className="p-3 bg-orange-web rounded-full">
          <MdOutlineShoppingCart className=" text-xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
