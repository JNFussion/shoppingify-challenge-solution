import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MdEventNote, MdWest } from "react-icons/md";
import { selectSavedShoppingListByDate } from "../../features/historySlice";
import Category from "./Category";

function SavedShoppingList() {
  const { id } = useParams();
  const shoppingList = useSelector((state) =>
    selectSavedShoppingListByDate(state, id)
  );
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (shoppingList) {
      setCategories([
        ...new Set(shoppingList.items.map((item) => item.category.name)),
      ]);
    }
    return () => {};
  }, [shoppingList]);

  return (
    <div className="px-3 py-7 lg:px-20 lg:py-10">
      <Link
        to="/history"
        className="flex items-center gap-2 font-bold text-orange-web"
      >
        <span>
          <MdWest />
        </span>
        <span>back</span>
      </Link>
      <article>
        <header className="my-9">
          <h2 className="text-jet text-2xl font-bold">
            {shoppingList && shoppingList.title}
          </h2>
          <p className="my-5 flex items-center gap-2  text-silver">
            <span className="text-xl">
              <MdEventNote />
            </span>
            <span className="text-sm">
              {shoppingList &&
                format(new Date(shoppingList.completionDate), "ccc dd.MM.y")}
            </span>
          </p>
        </header>
        <section>
          {categories.map((cat) => (
            <Category
              category={cat}
              items={shoppingList.items.filter(
                (item) => item.category.name === cat
              )}
            />
          ))}
        </section>
      </article>
    </div>
  );
}

export default SavedShoppingList;
