import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function NavbarLink({ path, icon, tooltipText }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative flex items-center">
      <div className="w-2 bg-black rounded-full" />
      <Link
        to={path}
        className="p-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {icon}
      </Link>
      {isHovering && (
        <div className="absolute right-[-80px]">
          <div className="tooltip px-4 py-1 text-white text-xs bg-gray-tooltip">
            <p className="pl-1">{tooltipText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

NavbarLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

export default NavbarLink;
