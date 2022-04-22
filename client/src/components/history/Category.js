import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function Category({ category, items }) {
  return (
    <article>
      <h3 className="capitalize text-lg">{category}</h3>
      <div className="py-7 flex gap-5 flex-wrap">
        {items.map((item) => (
          <Item name={item.name} qty={item.qty} />
        ))}
      </div>
    </article>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf.isRequired,
};

export default Category;
