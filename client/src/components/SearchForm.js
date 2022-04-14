import React from "react";
import { MdOutlineSearch } from "react-icons/md";

function SeachForm() {
  return (
    <form action="" className="px-4 py-3 flex rounded-xl shadow-sm bg-white">
      <button type="submit" className="p-2 text-lg">
        <MdOutlineSearch />
      </button>
      <input
        type="search"
        required
        placeholder="search item"
        className="px-2 rounded-r-xl focus:outline-none focus:ring-1 focus:ring-orange-web"
      />
    </form>
  );
}

export default SeachForm;
