import React from "react";
import { MdAdd } from "react-icons/md";
import PropTypes from "prop-types";

function Item({ name }) {
  return (
    <article className="w-fit px-4 py-3 flex gap-5 items-center rounded-xl shadow-sm bg-white">
      <h3 className="capitalize">{name}</h3>
      <button type="button" className="p-2 text-sm text-silver">
        <MdAdd />
      </button>
    </article>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Item;
