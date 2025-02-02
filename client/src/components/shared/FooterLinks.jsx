import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const FooterLinks = ({ name, url, elementKey, children }) => {
  const [showUnderline, setShowUnderline] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleFocusOn = () => {
    setFocus(true);
  };
  const handleFocusOff = () => {
    setFocus(false);
  };

  const handleOverUnderline = () => {
    setShowUnderline(true);
  };
  const handleOutUnderline = () => {
    setShowUnderline(false);
  };

  return (
    <div className="mb-4 w-3/4               ">
      {children ? (
        children
      ) : (
        <Link
          to={url}
          className={`inline-block relative decoration-transparent font-normal text-sm leading-6 text-center`}
          onMouseOver={handleOverUnderline}
          onMouseOut={handleOutUnderline}
          onFocus={handleFocusOn}
          onBlur={handleFocusOff}
          onClick={() => liSubToggle(elementKey)}
        >
          <span
            className={`text-base inline-block ${focus ? "font-extrabold" : "font-normal"}`}
          >
            {name}
            <img
              src="https://www.viviennewestwood.com/it-it/on/demandware.static/Sites-viviennewestwood-eu-Site/-/it_IT/v1711512064679/images/underline.svg"
              alt=""
              className={`opacity-0 transition-opacity object-cover ${
                showUnderline ? "opacity-100" : ""
              }`}
            />
          </span>
        </Link>
      )}
    </div>
  );
};
