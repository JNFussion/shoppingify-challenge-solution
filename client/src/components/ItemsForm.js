import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import {
  addCategory,
  addError,
  addImage,
  addName,
  addNote,
  clear,
  clearCategory,
  selectCategoryForm,
  selectErrorForm,
  selectImageForm,
  selectNameForm,
  selectNoteForm,
} from "../features/formSlice";
import {
  fetchCategories,
  fetchItemsByCategory,
  selectCategories,
} from "../features/itemsSlice";
import { showShoppingList } from "../features/showSlice";

function ItemsForm() {
  const name = useSelector(selectNameForm);
  const note = useSelector(selectNoteForm);
  const image = useSelector(selectImageForm);
  const category = useSelector(selectCategoryForm);
  const errors = useSelector(selectErrorForm);

  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/item/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        note,
        image,
        category,
      }),
    }).then((response) =>
      response.json().then((data) => {
        if (data.errors) {
          // Transform Errors from an array of objects to an object
          let err = {};
          data.errors.map((error) => {
            err = {
              ...err,
              [error.param]: {
                value: error.value,
                message: error.msg,
              },
            };
            return err;
          });
          dispatch(addError(err));
        } else {
          dispatch(clear());
          if (categories.find((cat) => cat === category)) {
            dispatch(fetchItemsByCategory(category));
          } else {
            dispatch(fetchCategories());
          }
          dispatch(showShoppingList());
        }
      })
    );
  }

  return (
    <section className="h-full px-3 lg:px-10 py-8 bg-white">
      <h2 className="text-2xl">Add a new item</h2>
      <form
        action=""
        className="h-full flex flex-col my-8"
        onSubmit={handleSubmit}
      >
        <div className="my-4">
          <label htmlFor="name" className="label">
            <div className="my-2 text-jet text-sm">Name</div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              placeholder="Enter a name"
              className="px-4 py-5 rounded-xl border-2 border-gray-x"
              onChange={(e) => dispatch(addName(e.target.value))}
            />
          </label>
          {errors && errors.name && (
            <p className="p-2 text-red-600 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="note" className="label">
            <div className="my-2 text-jet text-sm">Note (optional)</div>
            <textarea
              name="note"
              id="note"
              cols="25"
              rows="5"
              placeholder="Enter a note"
              className="resize-none px-4 py-5 rounded-xl border-2 border-gray-x"
              value={note}
              onChange={(e) => dispatch(addNote(e.target.value))}
            />
          </label>
          {errors && errors.note && (
            <p className="p-2 text-red-600 text-xs">{errors.note.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="image" className="label">
            <div className="my-2 text-jet text-sm">Image (optional)</div>
            <input
              type="url"
              name="image"
              id="image"
              value={image}
              placeholder="Enter a url"
              className="w-full px-4 py-5 rounded-xl border-2 border-gray-x"
              onChange={(e) => dispatch(addImage(e.target.value))}
            />
          </label>
          {errors && errors.image && (
            <p className="p-2 text-red-600 text-xs">{errors.image.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="category" className="label">
            <div className="my-2 text-jet text-sm">Category</div>
            <span className="relative">
              <input
                type="text"
                name="category"
                id="category"
                list="categories-names"
                value={category}
                placeholder="Enter a category"
                className="w-full px-4 py-5 rounded-xl border-2 border-gray-x"
                onChange={(e) => dispatch(addCategory(e.target.value))}
              />
              <datalist id="categories-names">
                {categories.map((cat) => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
              {category && (
                <button
                  type="button"
                  className="absolute top-[50%] translate-y-[-50%] right-[1em]"
                  onClick={() => dispatch(clearCategory())}
                >
                  <MdClose />
                </button>
              )}
            </span>
          </label>
          {errors && errors.category && (
            <p className="p-2 text-red-600 text-xs">
              {errors.category.message}
            </p>
          )}
        </div>
        <div className="my-auto flex gap-10 justify-center">
          <button
            type="button"
            className="text-jet"
            onClick={() => dispatch(showShoppingList())}
          >
            cancel
          </button>
          <button
            type="submit"
            className="px-6 py-5 rounded-xl text-white bg-orange-web"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default ItemsForm;
