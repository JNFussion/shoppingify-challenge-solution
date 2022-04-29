import React from "react";
import { Link } from "react-router-dom";
import { MdEventNote, MdChevronRight } from "react-icons/md";
import PropTypes from "prop-types";
import { format } from "date-fns";

function ShoppingListLink({ title, completionDate, isCompleted }) {
  return (
    <Link
      to={`/history/${format(new Date(completionDate), "y_MM_dd_hh_m")}`}
      className="p-5 flex flex-wrap justify-between rounded-xl shadow-sm bg-white border"
    >
      <div>{title}</div>
      <div className="flex gap-6 items-center text-sm">
        <div className="flex gap-3 items-center text-silver">
          <span>
            <MdEventNote />
          </span>
          <span>{format(new Date(completionDate), "ccc dd.MM.y")}</span>
        </div>
        <div
          className={`px-2 py-1 rounded-lg border ${
            isCompleted
              ? "text-vivid-sky-blue border-vivid-sky-blue"
              : "text-red-salsa border-red-salsa"
          }`}
        >
          {isCompleted ? "completed" : "cancelled"}
        </div>

        <MdChevronRight className="text-lg text-orange-web" />
      </div>
    </Link>
  );
}

ShoppingListLink.propTypes = {
  title: PropTypes.string.isRequired,
  completionDate: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default ShoppingListLink;
