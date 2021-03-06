import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItemsByCategory,
  selectCategory,
} from "../../features/itemsSlice";
import Item from "./Item";

function Category({ name }) {
  const category = useSelector((state) => selectCategory(state, name));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsByCategory(name));
    return () => {};
  }, []);

  return (
    <section>
      <h2 className="text-lg capitalize">{name}</h2>
      <div className="my-4 flex flex-wrap gap-5">
        {category.items &&
          category.items.map((item) => (
            <Item key={item.name} name={item.name} category={item.category} />
          ))}
        {category.items && category.items.length === 0 && (
          <p className="mx-auto text-silver text-sm">No items here</p>
        )}
      </div>
    </section>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
