import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEditOutline, MdOutlineSave } from "react-icons/md";
import Bottle from "../../assets/images/source.svg";
import {
  selectCategoriesShoppingList,
  selectItemsShoppingList,
  selectTitleShoppingList,
  setTitle,
} from "../../features/currentShoppingListSlice";
import { showForm } from "../../features/showSlice";
import Cart from "../../assets/images/undraw_shopping_app_flsj 1.svg";
import Category from "./Category";

function ShoppingList() {
  const categories = useSelector(selectCategoriesShoppingList);
  const items = useSelector(selectItemsShoppingList);
  const title = useSelector(selectTitleShoppingList);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [titleInput, setTitleInput] = useState(title);

  function handleClick() {
    setIsEditing(false);
    dispatch(setTitle(titleInput));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setTitle(e.target.title.value));
    e.target.title.value = "";
  }

  useEffect(() => {
    setTitleInput(title);
    return () => {};
  }, [title]);

  return (
    <div className="h-full grid">
      <article className="flex flex-col px-12 py-11 bg-antique-white">
        <section className="flex gap-7 px-7 py-4 rounded-3xl bg-lavender">
          <div>
            <img
              src={Bottle}
              alt="bottle"
              className="mt-[-40px] w-full h-full"
            />
          </div>
          <div className="grid gap-3">
            <h3 className="text-white font-bold">
              Didn&apos;t find what you need?
            </h3>
            <button
              type="button"
              className="w-fit px-7 py-3 rounded-xl shadow-sm text-jet text-sm font-bold bg-white"
              onClick={() => dispatch(showForm())}
            >
              Add item
            </button>
          </div>
        </section>
        {items.length ? (
          <section className="my-11">
            <h2 className="mb-10 flex justify-between items-center text-2xl">
              {isEditing ? (
                <span>
                  <input
                    type="text"
                    name="titleInput"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    className="w-full px-2 py-1 rounded-xl"
                  />
                </span>
              ) : (
                <span>{title}</span>
              )}
              <span>
                {isEditing ? (
                  <button type="button" onClick={handleClick}>
                    <MdOutlineSave />
                  </button>
                ) : (
                  <button type="button" onClick={() => setIsEditing(true)}>
                    <MdOutlineModeEditOutline />
                  </button>
                )}
              </span>
            </h2>
            {categories.map((name) => (
              <Category key={name} name={name} />
            ))}
          </section>
        ) : (
          <>
            <section className="my-auto self-center">No items</section>
            <div className="mt-auto">
              <img src={Cart} alt="woman shopping with a cart" />
            </div>
          </>
        )}
      </article>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid place-content-center bg-white "
      >
        <div
          className={`w-fit rounded-xl border ${
            items.length === 0 ? "border-silver" : "border-orange-web"
          }`}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter a name"
            disabled={items.length === 0}
            className="px-4 py-5 rounded-xl"
          />
          <button
            type="submit"
            disabled={items.length === 0}
            className={`py-5 px-6 rounded-xl font-bold text-white ${
              items.length === 0 ? "bg-silver" : "bg-orange-web"
            }`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShoppingList;
