import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineArrowBack } from "react-icons/md";
import { selectItem } from "../features/currentItem";
import { showShoppingList } from "../features/showSlice";
import { addItem, removeItem } from "../features/currentShoppingListSlice";

function ShowItem() {
  const { name, note, image, category } = useSelector(selectItem);
  const dispatch = useDispatch();

  return (
    <article className="h-full px-11 py-7 bg-white">
      <div>
        <button
          type="button"
          className="flex items-center gap-2 text-orange-web"
          onClick={() => dispatch(showShoppingList())}
        >
          <span>
            <MdOutlineArrowBack />
          </span>
          <span>back</span>
        </button>
      </div>
      <div className="my-9">
        <img
          src={image}
          alt={name}
          className="rounded-3xl"
          width="300px"
          height="220px"
        />
      </div>
      <header>
        <p className="mb-3 text-silver text-xs">name</p>
        <h2 className="capitalize text-2xl">{name}</h2>
      </header>
      <section>
        <div className="my-9">
          <p className="mb-3 text-silver text-xs">category</p>
          <p className="capitalize">{category && category.name}</p>
        </div>
        <div className="my-9">
          <p className="mb-3 text-silver text-xs">note</p>
          <p>{note}</p>
        </div>
      </section>
      <section className="grid place-content-center">
        <div className="flex gap-4">
          <button type="button" onClick={() => dispatch(removeItem(name))}>
            delete
          </button>
          <button
            type="button"
            className="py-5 px-6 rounded-xl text-white font-bold bg-orange-web"
            onClick={() => dispatch(addItem({ name, category }))}
          >
            Add to list
          </button>
        </div>
      </section>
    </article>
  );
}

export default ShowItem;
