import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Quantity from "./Quantity";
import ButtonQty from "./ButtonQty";
import { selectItemByName } from "../../features/currentShoppingListSlice";

function Item({ name, qty }) {
  const { isEditing } = useSelector((state) => selectItemByName(state, name));

  return (
    <article className="w-full my-6 flex items-center justify-between">
      <h3 className="capitalize">{name}</h3>
      {isEditing ? (
        <Quantity name={name} qty={qty} />
      ) : (
        <ButtonQty name={name} qty={qty} />
      )}
    </article>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Item;
