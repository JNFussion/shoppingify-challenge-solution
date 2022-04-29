import React from "react";
import { useSelector } from "react-redux";
import { selectMonths } from "../../features/historySlice";
import Month from "./Month";

function History() {
  const months = useSelector(selectMonths);

  return (
    <article className="max-w-[1440px] max-h-screen overflow-y-scroll flex-1 mx-auto py-7 px-3 lg:py-9 lg:px-20">
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
