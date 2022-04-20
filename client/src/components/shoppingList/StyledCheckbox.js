import React from "react";
import { MdDone } from "react-icons/md";
import PropTypes from "prop-types";

function StyledCheckbox({ completed }) {
  return (
    <div className="w-6 h-6 grid place-content-center rounded border border-orange-web text-orange-web">
      {completed && <MdDone />}
    </div>
  );
}

StyledCheckbox.propTypes = {
  completed: PropTypes.bool.isRequired,
};
export default StyledCheckbox;
