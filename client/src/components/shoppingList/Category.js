import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import EditingItem from "./EditingItem";
import {
  selectIsEditingShoppingList,
  selectItemsByCategoryShoppingList,
} from "../../features/currentShoppingListSlice";
import CompletingItem from "./CompletingItem";

function Category({ name }) {
  const items = useSelector((state) =>
    selectItemsByCategoryShoppingList(state, name)
  );
  const isEditing = useSelector(selectIsEditingShoppingList);

  return (
    <section>
      <h2 className="text-sm text-gray-web capitalize">{name}</h2>
      <ul className="my-4">
        {items &&
          items.map((item) => (
            <li>
              {isEditing ? (
                <EditingItem key={item.name} name={item.name} qty={item.qty} />
              ) : (
                <CompletingItem
                  key={item.name}
                  name={item.name}
                  qty={item.qty}
                />
              )}
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
