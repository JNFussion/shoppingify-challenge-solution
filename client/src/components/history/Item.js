import React from "react";
import PropTypes from "prop-types";

function Item({ name, qty }) {
  return (
    <div className="w-[182px] px-4 py-3 flex shadow-sm rounded-xl justify-between bg-white">
      <div className="capitalize">{name}</div>
      <p className="text-sm text-orange-web">{qty} pcs</p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
};

export default Item;
