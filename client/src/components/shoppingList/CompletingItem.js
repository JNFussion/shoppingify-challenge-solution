/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Quantity from "./Quantity";
import ButtonQty from "./ButtonQty";
import { selectItemByName } from "../../features/currentShoppingListSlice";
import StyledCheckbox from "./StyledCheckbox";

function CompletingItem({ name, qty }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <button
      type="button"
      className="w-full flex gap-2 my-6 items-center"
      onClick={() => setIsCompleted((prevState) => !prevState)}
    >
      <StyledCheckbox completed={isCompleted} />
      <div className="flex-1 flex items-center justify-between">
        <div className={`capitalize ${isCompleted && "line-through"}`}>
          {name}
        </div>
        <div className="px-5 py-2 flex gap-1 border border-orange-web rounded-3xl font-bold text-xs text-orange-web">
          <span>{qty}</span>
          <span>pcs</span>
        </div>
      </div>
    </button>
  );
}

CompletingItem.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default CompletingItem;
