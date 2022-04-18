import React from "react";
import { useDispatch } from "react-redux";
import Bottle from "../assets/images/source.svg";
import { showForm } from "../features/showSlice";

function ShoppingList() {
  const dispatch = useDispatch();

  return (
    <article className="px-12 py-11 bg-antique-white">
      <section className="flex gap-7 px-7 py-4 rounded-3xl bg-lavender">
        <div>
          <img src={Bottle} alt="bottle" className="mt-[-40px] w-full h-full" />
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
    </article>
  );
}

export default ShoppingList;
