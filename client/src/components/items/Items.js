import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, selectCategories } from "../../features/itemsSlice";
import SeachForm from "../SearchForm";
import Category from "./Category";

function Items() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    return () => {};
  }, []);

  return (
    <article>
      <header className="px-20 py-9 flex justify-between">
        <h1 className="max-w-md text-2xl">
          <span className="text-orange-web font-bold">Shoppingify</span> allows
          you take your shopping llist wherever you go
        </h1>
        <SeachForm />
      </header>
      <div className="my-14 mx-20">
        {categories.map((category) => (
          <Category name={category} />
        ))}
      </div>
    </article>
  );
}

export default Items;
