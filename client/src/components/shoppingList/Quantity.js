import React from "react";
import { MdAdd, MdOutlineDeleteOutline, MdRemove } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ButtonQty from "./ButtonQty";
import {
  decreaseQty,
  increaseQty,
  removeItem,
} from "../../features/currentShoppingListSlice";

function Quantity({ name, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 rounded-xl bg-white">
      <button
        type="button"
        className="p-3 rounded-xl text-white bg-orange-web"
        onClick={() => dispatch(removeItem(name))}
      >
        <MdOutlineDeleteOutline />
      </button>
      <div className="flex gap-2 text-orange-web">
        <button type="button" onClick={() => dispatch(decreaseQty(name))}>
          <MdRemove />
        </button>
        <ButtonQty name={name} qty={qty} />
        <button type="button" onClick={() => dispatch(increaseQty(name))}>
          <MdAdd />
        </button>
      </div>
    </div>
  );
}

Quantity.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Quantity;
