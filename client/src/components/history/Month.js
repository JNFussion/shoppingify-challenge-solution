import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectShoppingListsByMonth } from "../../features/historySlice";
import ShoppingListLink from "./ShoppingListLink";

function Month({ month }) {
  const namedMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shoppingLists = useSelector((state) =>
    selectShoppingListsByMonth(state, month)
  );

  console.log(shoppingLists);

  return (
    <section>
      <h2 className="text-xs capitalize flex gap-2">
        <span>{namedMonth[month.split(" ")[0]]}</span>
        <span>{month.split(" ")[1]}</span>
      </h2>
      <ul>
        {shoppingLists.map((shoppingList) => (
          <li className="my-4">
            <ShoppingListLink
              title={shoppingList.title}
              completionDate={shoppingList.completionDate}
              isCompleted={shoppingList.isCompleted}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
};

export default Month;
