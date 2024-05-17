import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const LiSubMenu = ({ elements, isSubMenuOpen }) => {
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
      className={`overflow-auto h-[2000px] bg-white relative pt-28 px-5 pb-10 w-80 z-[2] ${
        isSubMenuOpen
          ? "left-0 pointer-events-none translate-x-0"
          : "-left-[100%] pointer-events-auto translate-x-full"
      } transition-all duration-500 absolute`}
    >
      <ul className="flex flex-col flex-grow">
        {elements.map((e, index) => (
          <li
            key={index}
            className="mb-5 cursor-pointer"
            onMouseOver={() => handleOverUnderline(index)}
            onMouseOut={() => handleOutUnderline(index)}
          >
            <Link to="/news">{e}</Link>
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
