import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Bottle from "../assets/images/source.svg";
import { selectItemsShoppingList } from "../features/currentShoppingListSlice";
import { showForm } from "../features/showSlice";
import Cart from "../assets/images/undraw_shopping_app_flsj 1.svg";

function ShoppingList() {
  const items = useSelector(selectItemsShoppingList);
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
          <section>ITEMS</section>
        ) : (
          <>
            <section className="my-auto self-center">No items</section>
            <div className="mt-auto">
              <img src={Cart} alt="woman shopping with a cart" />
            </div>
          </>
        )}
      </article>
      <form action="" className="grid place-content-center bg-white ">
        <div
          className={`w-fit rounded-xl border ${
            items.length === 0 ? "border-silver" : "border-orange-web"
          }`}
        >
          <input
            type="text"
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
