import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  setIsEditing,
  setTitle,
} from "../../features/currentShoppingListSlice";

function FormTitle({ items }) {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setTitle(e.target.title.value));
    dispatch(setIsEditing(false));
    e.target.title.value = "";
  }

  return (
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
  );
}

FormTitle.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

export default FormTitle;
