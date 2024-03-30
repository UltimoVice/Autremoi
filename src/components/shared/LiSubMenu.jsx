import { useState } from "react";

export const LiSubMenu = ({ elements, onFocusSubMenu, onBlurSubMenu, isSubMenuOpen }) => {
  const [showUnderlines, setShowUnderlines] = useState(
    elements.map(() => false)
  );

  const handleOverUnderline = (index) => {
    setShowUnderlines((prevShowUnderlines) => ({
      ...prevShowUnderlines,
      [index]: true,
    }));
  };

  const handleOutUnderline = (index) => {
    setShowUnderlines((prevShowUnderlines) => ({
      ...prevShowUnderlines,
      [index]: false,
    }));
  };

  return (
    <div
      className={`overflow-auto h-full ${
        isSubMenuOpen ? "left-0 pointer-events-auto translate-x-0" : "-left-[90%] pointer-events-auto translate-x-full"
      } transition-all duration-500 absolute`}
      onFocus={onFocusSubMenu}
      onBlur={onBlurSubMenu}
    >
      <ul className="flex flex-col flex-grow">
        {elements.map((e, index) => (
          <li
            key={index}
            className={`mb-5 cursor-pointer`}
            onMouseOver={() => handleOverUnderline(index)}
            onMouseOut={() => handleOutUnderline(index)}
          >
            <a href="">{e}</a>
            <img
              src="https://www.viviennewestwood.com/it-it/on/demandware.static/Sites-viviennewestwood-eu-Site/-/it_IT/v1711512064679/images/underline.svg"
              alt=""
              className={`opacity-0 transition-opacity object-cover ${
                showUnderlines[index] ? "opacity-100" : ""
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
