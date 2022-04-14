import React from "react";
import Bottle from "../assets/images/source.svg";

function ShoppingList() {
  return (
    <article className="px-12 py-11">
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
          >
            Add item
          </button>
        </div>
      </section>
    </article>
  );
}

export default ShoppingList;
