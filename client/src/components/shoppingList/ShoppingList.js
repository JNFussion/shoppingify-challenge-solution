import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Bottle from "../../assets/images/source.svg";
import {
  cancelShoppingList,
  selectCategoriesShoppingList,
  selectIsEditingShoppingList,
  selectItemsShoppingList,
  selectTitleShoppingList,
  toggleIsEditing,
} from "../../features/currentShoppingListSlice";
import { showForm } from "../../features/showSlice";
import Cart from "../../assets/images/undraw_shopping_app_flsj 1.svg";
import Category from "./Category";
import FormTitle from "./FormTitle";

function ShoppingList() {
  const categories = useSelector(selectCategoriesShoppingList);
  const items = useSelector(selectItemsShoppingList);
  const title = useSelector(selectTitleShoppingList);
  const isEditing = useSelector(selectIsEditingShoppingList);
  const dispatch = useDispatch();

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
              <span>{title}</span>
              <span>
                <button
                  type="button"
                  onClick={() => dispatch(toggleIsEditing())}
                >
                  <MdOutlineModeEditOutline />
                </button>
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
      {isEditing ? (
        <FormTitle items={items} />
      ) : (
        <div className="flex gap-4 items-center justify-center">
          <button type="button" className="text-jet font-bold">
            cancel
          </button>
          <button
            type="button"
            className="px-6 py-5 rounded-xl font-bold text-white bg-vivid-sky-blue"
          >
            Complete
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
