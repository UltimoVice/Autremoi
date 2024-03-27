import { useState } from "react";

export const LiSideMenu = ({ name }) => {
  const [showUnderline, setShowUnderline] = useState(false);

  const handleOverUnderline = () => {
    setShowUnderline(true);
  };
  const handleOutUnderline = () => {
    setShowUnderline(false);
  };
  return (
    <li className="mb-5">
      <a
        href=""
        className="cursor-pointer relative decoration-transparent font-normal text-sm flex justify-between leading-6"
        onMouseOver={handleOverUnderline}
        onMouseOut={handleOutUnderline}
      >
        <span className="font-normal text-base">
          {name}
          <img
            src="https://www.viviennewestwood.com/it-it/on/demandware.static/Sites-viviennewestwood-eu-Site/-/it_IT/v1711512064679/images/underline.svg"
            alt=""
            className={`opacity-0 transition-opacity object-cover ${
              showUnderline ? "opacity-100" : ""
            }`}
            onMouseOver={handleOverUnderline}
          />
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </a>
    </li>
  );
};
