import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import {
  addCategory,
  addImage,
  addName,
  addNote,
  clearCategory,
  selectCategoryForm,
  selectImageForm,
  selectNameForm,
  selectNoteForm,
} from "../features/formSlice";
import { selectCategories } from "../features/itemsSlice";

function ItemsForm() {
  const name = useSelector(selectNameForm);
  const note = useSelector(selectNoteForm);
  const image = useSelector(selectImageForm);
  const category = useSelector(selectCategoryForm);

  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  console.log(name, category);

  return (
    <section className="h-full px-10 py-8">
      <h2 className="text-2xl">Add a new item</h2>
      <form action="" className="h-full flex flex-col my-8">
        <div className="my-4">
          <label htmlFor="name">
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
        </div>
        <div>
          <label htmlFor="note">
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
        </div>
        <div>
          <label htmlFor="image">
            <div className="my-2 text-jet text-sm">Image (optional)</div>
            <input
              type="url"
              name="image"
              id="image"
              value=""
              placeholder="Enter a url"
              className="w-full px-4 py-5 rounded-xl border-2 border-gray-x"
              onChange={(e) => dispatch(addImage(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label htmlFor="category">
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
        </div>
        <div className="my-auto flex gap-10 justify-center">
          <button type="button" className="text-jet ">
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
