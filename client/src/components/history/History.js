import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSaveShoppingLists,
  selectMonths,
} from "../../features/historySlice";
import Month from "./Month";

function History() {
  const months = useSelector(selectMonths);

  return (
    <article className="max-w-[1440px] flex-1 py-9 px-20">
      <h2 className="text-2xl font-bold text-jet">Shopping History</h2>
      <section className="my-10">
        {months.map((month) => (
          <Month month={month} />
        ))}
      </section>
    </article>
  );
}

export default History;
