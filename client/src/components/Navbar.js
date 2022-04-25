import React from "react";
import {
  MdOutlineShoppingCart,
  MdOutlineFormatListBulleted,
  MdInsertChartOutlined,
  MdReplay,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/images/logo.svg";
import { selectItemsShoppingList } from "../features/currentShoppingListSlice";
import { toggleShoppingList } from "../features/showSlice";
import NavbarLink from "./NavbarLink";

function Navbar() {
  const items = useSelector(selectItemsShoppingList);
  const dispatch = useDispatch();

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
      <div className="relative">
        <div className="absolute top-[-10px] right-[-10px] py-1 px-2 rounded text-xs text-white bg-red-salsa">
          {items ? items.length : 0}
        </div>
        <button
          type="button"
          className="p-3 bg-orange-web rounded-full"
          onClick={() => dispatch(toggleShoppingList())}
        >
          <MdOutlineShoppingCart className=" text-xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
