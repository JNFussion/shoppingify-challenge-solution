import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleIsEditingItem } from "../../features/currentShoppingListSlice";

function ButtonQty({ name, qty }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="px-5 py-2 flex gap-1 border border-orange-web rounded-3xl font-bold text-xs text-orange-web"
      onClick={() => dispatch(toggleIsEditingItem(name))}
    >
      <span>{qty}</span>
      <span>pcs</span>
    </button>
  );
}

ButtonQty.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default ButtonQty;
