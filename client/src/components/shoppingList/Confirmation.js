import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cancelShoppingList } from "../../features/currentShoppingListSlice";
import { toggleConfirmation } from "../../features/showSlice";

function Confirmation() {
  const dispatch = useDispatch();

  return (
    <div className="absolute w-screen min-h-screen grid place-content-center bg-black/10">
      <article className="px-9 py-6 rounded-3xl bg-white">
        <div className="w-fit ml-auto">
          <button type="button" onClick={() => dispatch(toggleConfirmation())}>
            <MdClose />
          </button>
        </div>
        <h2 className="py-2 text-jet text-2xl">
          Are you sure that you want to cancel this list?
        </h2>
        <div className="mt-14 w-fit ml-auto flex gap-6">
          <button
            type="button"
            className="text-jet font-bold"
            onClick={() => dispatch(toggleConfirmation())}
          >
            cancel
          </button>
          <button
            type="button"
            className="px-7 py-5 rounded-xl text-white font-bold bg-red-salsa"
            onClick={dispatch(cancelShoppingList())}
          >
            Yes
          </button>
        </div>
      </article>
    </div>
  );
}

export default Confirmation;
