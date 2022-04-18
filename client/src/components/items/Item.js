import React from "react";
import { MdAdd } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { showItem } from "../../features/showSlice";
import { fetchItem } from "../../features/currentItem";

function Item({ name }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(showItem());
    dispatch(fetchItem(name));
  }

  return (
    <article className="w-fit px-4 py-3 flex gap-5 items-center rounded-xl shadow-sm bg-white">
      <h3 className="capitalize">
        <button type="button" onClick={handleClick}>
          {name}
        </button>
      </h3>
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
