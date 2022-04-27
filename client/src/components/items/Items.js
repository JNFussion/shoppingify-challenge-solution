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
    <article className="max-h-screen overflow-x-scroll">
      <header className="px-3 lg:px-20 py-9 flex flex-wrap justify-between">
        <h1 className="max-w-md text-2xl">
          <span className="text-orange-web font-bold">Shoppingify</span> allows
          you take your shopping list wherever you go
        </h1>
        <SeachForm />
      </header>
      <div className="my-14 mx-3 lg:mx-20">
        {categories.map((category) => (
          <Category key={category} name={category} />
        ))}
      </div>
    </article>
  );
}

export default Items;
