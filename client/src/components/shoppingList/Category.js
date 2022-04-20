import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { selectItemsByCategoryShoppingList } from "../../features/currentShoppingListSlice";

function Category({ name }) {
  const items = useSelector((state) =>
    selectItemsByCategoryShoppingList(state, name)
  );
  const dispatch = useDispatch();

  return (
    <section>
      <h2 className="text-sm text-gray-web capitalize">{name}</h2>
      <ul className="my-4">
        {items &&
          items.map((item) => (
            <li>
              <Item key={item.name} name={item.name} qty={item.qty} />
            </li>
          ))}
      </ul>
    </section>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
